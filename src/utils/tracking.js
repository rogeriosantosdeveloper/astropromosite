// Helper central para disparar eventos de conversão.
// Assim que você instalar o Meta Pixel no index.html (fbq),
// todo clique nos botões de WhatsApp/Telegram já vai ser rastreado
// automaticamente daqui, sem precisar mexer em cada componente.

export function trackClick(eventName = 'Contact', params = {}) {
  try {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', eventName, params);
    }
  } catch (err) {
    // Nunca deixa o rastreamento quebrar a navegação do usuário
    console.warn('Falha ao registrar evento de conversão:', err);
  }
}
