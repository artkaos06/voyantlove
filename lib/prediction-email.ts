import { type TarotPrediction } from '@/data/tarot-predictions';

const ZODIAC_LABELS: Record<string, string> = {
  belier: 'Bélier', taureau: 'Taureau', gemeaux: 'Gémeaux', cancer: 'Cancer',
  lion: 'Lion', vierge: 'Vierge', balance: 'Balance', scorpion: 'Scorpion',
  sagittaire: 'Sagittaire', capricorne: 'Capricorne', verseau: 'Verseau', poissons: 'Poissons',
};

const SITUATION_LABELS: Record<string, string> = {
  reconquete: 'Reconquête amoureuse',
  rupture: 'Surmonter une rupture',
  'nouvelle-rencontre': 'Rencontrer l\'amour',
  sentiments: 'Comprendre ses sentiments',
  'crise-couple': 'Crise de couple',
};

export function buildPredictionEmailHTML(
  name: string,
  zodiac: string,
  situation: string,
  prediction: TarotPrediction,
): string {
  const zodiacLabel = ZODIAC_LABELS[zodiac] || zodiac;
  const situationLabel = SITUATION_LABELS[situation] || situation;

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Votre Tirage Tarot Amour - VoyantLove</title>
</head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6;padding:20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#7c3aed,#4f46e5);padding:40px 30px;text-align:center;">
              <div style="font-size:40px;margin-bottom:10px;">${prediction.cardEmoji}</div>
              <h1 style="color:#ffffff;font-size:24px;margin:0 0 8px 0;">Votre Tirage Tarot Amour</h1>
              <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:0;">${zodiacLabel} — ${situationLabel}</p>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding:30px 30px 10px;">
              <p style="font-size:16px;color:#1f2937;margin:0;">Bonjour <strong>${name}</strong>,</p>
              <p style="font-size:15px;color:#4b5563;margin:10px 0 0;line-height:1.6;">
                Voici votre tirage tarot amour personnalisé. Les cartes ont parlé — voici ce qu'elles révèlent sur votre situation.
              </p>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="padding:20px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f3ff;border-left:4px solid #7c3aed;border-radius:8px;">
                <tr>
                  <td style="padding:20px;">
                    <p style="font-size:13px;color:#6b7280;margin:0 0 4px;text-transform:uppercase;letter-spacing:1px;">Votre carte</p>
                    <p style="font-size:22px;font-weight:bold;color:#7c3aed;margin:0;">${prediction.cardEmoji} ${prediction.card}</p>
                    <p style="font-size:13px;color:#6b7280;margin:4px 0 0;">Élément ${prediction.element}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Opening -->
          <tr>
            <td style="padding:0 30px 20px;">
              <p style="font-size:16px;color:#374151;font-style:italic;line-height:1.6;margin:0;">
                ${prediction.opening}
              </p>
            </td>
          </tr>

          <!-- Insight -->
          <tr>
            <td style="padding:0 30px 20px;">
              <h2 style="font-size:18px;color:#1f2937;margin:0 0 10px;">🔮 Ce que les cartes révèlent</h2>
              <p style="font-size:15px;color:#4b5563;line-height:1.7;margin:0;">
                ${prediction.insight}
              </p>
            </td>
          </tr>

          <!-- Advice -->
          <tr>
            <td style="padding:0 30px 20px;">
              <h2 style="font-size:18px;color:#1f2937;margin:0 0 10px;">💡 Le conseil des cartes</h2>
              <p style="font-size:15px;color:#4b5563;line-height:1.7;margin:0;">
                ${prediction.advice}
              </p>
            </td>
          </tr>

          <!-- Timeframe -->
          <tr>
            <td style="padding:0 30px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#ede9fe;border-radius:8px;">
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="font-size:14px;font-weight:bold;color:#1f2937;margin:0 0 4px;">⏰ Votre timing</p>
                    <p style="font-size:15px;color:#4b5563;margin:0;line-height:1.6;">${prediction.timeframe}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:10px 30px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#faf5ff;border-radius:12px;border:1px solid #e9d5ff;">
                <tr>
                  <td style="padding:30px;text-align:center;">
                    <h2 style="font-size:20px;color:#1f2937;margin:0 0 10px;">Pour aller plus loin...</h2>
                    <p style="font-size:15px;color:#4b5563;margin:0 0 20px;line-height:1.6;">
                      Ce tirage donne un aperçu général. Pour une analyse <strong>personnalisée et approfondie</strong> avec des dates et détails précis, consultez un voyant spécialisé.
                    </p>
                    <a href="https://voyantlove.fr/?utm_source=brevo&utm_medium=email&utm_campaign=prediction" style="display:inline-block;background:linear-gradient(135deg,#7c3aed,#4f46e5);color:#ffffff;font-weight:bold;font-size:16px;padding:14px 32px;border-radius:8px;text-decoration:none;">
                      🔮 Consulter un Voyant Maintenant
                    </a>
                    <p style="font-size:12px;color:#9ca3af;margin:12px 0 0;">Paiement sécurisé — Confidentiel — Disponible 7j/7</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f9fafb;padding:20px 30px;text-align:center;border-top:1px solid #e5e7eb;">
              <p style="font-size:12px;color:#9ca3af;margin:0 0 8px;">
                VoyantLove.fr — Voyance Amoureuse Spécialisée
              </p>
              <p style="font-size:11px;color:#d1d5db;margin:0;">
                Vous recevez cet email suite à votre demande de tirage gratuit.
                <a href="{{unsubscribe}}" style="color:#9ca3af;">Se désinscrire</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
