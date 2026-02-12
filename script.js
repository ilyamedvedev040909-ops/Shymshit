// Selection Tool Logic
const selectionInput = document.getElementById("userRequest");
const selectionBtn = document.getElementById("findSolutionBtn");
const selectionResult = document.getElementById("selectionResult");

async function findSolution() {
  const query = selectionInput.value.trim();
  if (!query) return;
  
  // Show loading state
  selectionResult.innerHTML = `
    <div style="text-align:center; color:#aeb0b6; padding: 20px;">
      Анализирую ваш запрос... (10 - 15 сек.)
    </div>
  `;

  try {
    const API_KEY = "AIzaSyAK0tvSEbzUNcK0ABtSrii1jLvEUW0YP8A";
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        safetySettings: [
          { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
        ],
        contents: [{
          parts: [{
            text: `Ты - эксперт по шумоизоляции.
            Проанализируй проблему: "${query}".
            
            Дай КРАТКУЮ, СУХУЮ рекомендацию без лишних слов.
            
            Верни ответ строго в формате JSON:
            {
              "recommendation": "Техническое решение списком. Только суть: какие материалы и слои использовать. Без вводных слов.",
              "breakdown": "Смета по пунктам (материал/работа). Пример: <br>• Каркас стены: ~6000 ₸/м²<br>• Виброподвесы: ~2000 ₸/шт",
              "total_price": "Итого: от ... до ... ₸/м²"
            }
            
            Условия:
            1. Цены в тенге (KZT).
            2. JSON должен быть валидным.
            3. Максимально сжато и по делу. Не лей воду.`
          }]
        }]
      })
    });

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.message);
    }

    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
       throw new Error("Не удалось получить ответ от ИИ. Попробуйте переформулировать запрос.");
    }

    let rawText = data.candidates[0].content.parts[0].text;
    // Clean markdown code blocks if present
    rawText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
    
    let result;
    try {
      result = JSON.parse(rawText);
    } catch (e) {
      // Fallback if JSON parsing fails
      console.error("JSON Parse Error", e);
      result = {
        recommendation: rawText,
        breakdown: "-",
        total_price: "-"
      };
    }
    
    // Ensure all fields exist and are strings
    result.recommendation = result.recommendation || "Рекомендация не сформирована";
    result.breakdown = result.breakdown || "-";
    result.total_price = result.total_price || "-";

    // Simple markdown parser with type safety
    const parseMd = (txt) => {
      if (!txt) return "";
      return String(txt)
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
        .replace(/\*(.*?)\*/g, '<i>$1</i>')
        .replace(/- (.*?)(?=\n|$)/g, '<li>$1</li>')
        .replace(/\n/g, '<br>');
    };

    selectionResult.innerHTML = `
      <div class="recommendation-frame" style="border: 1px solid #2d7cff; background: rgba(45, 124, 255, 0.05); padding: 20px; border-radius: 12px; margin-top: 15px;">
        <h3 style="color: #2d7cff; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Рекомендуемое решение</h3>
        <div style="color: #e6e7ea; line-height: 1.5; font-size: 15px; margin-bottom: 20px;">
          ${parseMd(result.recommendation)}
        </div>
        <div class="price-breakdown" style="border-top: 1px solid rgba(45,124,255,0.2); padding-top: 15px; color: #b9bcc2; font-size: 14px;">
          ${parseMd(result.breakdown)}
        </div>
        <div class="price-block" style="margin-top: 15px; font-weight: 600; color: #fff; font-size: 16px;">
          ${result.total_price}
        </div>
      </div>
      <div style="text-align:center; margin-top: 20px;">
         <a href="#contacts" class="btn btn-action">Заказать расчет</a>
      </div>
    `;
    
  } catch (error) {
    console.error("Error:", error);
    selectionResult.innerHTML = `
              <div class="selection-message" style="color:#ff4d4d; text-align:center; margin-bottom: 20px;">
                Произошла ошибка при обработке запроса: ${error.message}<br>Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.
              </div>
              <div style="text-align:center;">
                 <a href="#contacts" class="btn btn-action">Связаться с менеджером</a>
              </div>
            `;
  }
}

if (selectionBtn) {
  selectionBtn.addEventListener("click", findSolution);
}

if (selectionInput) {
  selectionInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") findSolution();
  });
}

// Generic Modal Logic
const openModal = (modalId) => {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
};

const closeAllModals = () => {
  document.querySelectorAll(".modal-overlay").forEach(modal => {
    modal.classList.remove("active");
  });
  document.body.style.overflow = "";
};

// Close buttons
document.querySelectorAll(".modal-close").forEach(btn => {
  btn.addEventListener("click", closeAllModals);
});

// Click outside
document.querySelectorAll(".modal-overlay").forEach(modal => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeAllModals();
  });
});

// Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAllModals();
});

// Assistant Link
const assistantLink = document.querySelector('a[href="#assistant"]');
if (assistantLink) {
  assistantLink.addEventListener("click", (e) => {
    e.preventDefault();
    openModal("assistantModal");
  });
}
