/**
 * Script pour mettre à jour l'URL affilié
 *
 * Usage:
 * 1. Remplacer AFFILIATE_BASE_URL par votre URL réelle
 * 2. Exécuter: tsx scripts/update_affiliate_url.ts
 */

const AFFILIATE_BASE_URL = 'https://votre-reseau-affilie.com/voyant';
// Exemple: 'https://monsitevoyance.com/consultant'
// Exemple: 'https://affiliate-network.com/psychic'

/**
 * Formats d'URL possibles selon votre réseau affilié:
 *
 * Format 1: ID dans le path
 * https://network.com/voyant/{ID}?ref={source}
 *
 * Format 2: ID en paramètre
 * https://network.com/voyant?id={ID}&ref={source}
 *
 * Format 3: Nom du voyant dans le path
 * https://network.com/voyant/{nom}?ref={source}
 *
 * Format 4: Paramètres multiples
 * https://network.com/consultant?voyant_id={ID}&utm_source=voyantlove&utm_campaign={source}
 */

// Fonction à copier dans /lib/voyants.ts
export function getAffiliateLink(voyantId: string, source: string = 'voyantlove'): string {
  // OPTION 1: ID dans le path (recommandé)
  return `${AFFILIATE_BASE_URL}/${voyantId}?ref=${source}`;

  // OPTION 2: ID en paramètre
  // return `${AFFILIATE_BASE_URL}?id=${voyantId}&ref=${source}`;

  // OPTION 3: Tracking UTM complet
  // return `${AFFILIATE_BASE_URL}/${voyantId}?utm_source=voyantlove&utm_medium=content&utm_campaign=${source}`;

  // OPTION 4: Paramètres personnalisés
  // return `${AFFILIATE_BASE_URL}?voyant=${voyantId}&source=${source}&partner=voyantlove`;
}

// Test de génération de liens
console.log('=== Test Génération Liens Affiliés ===\n');

const testVoyants = [
  { id: '8864', nom: 'sibylle' },
  { id: '8062', nom: 'kalinda' },
  { id: '11185', nom: 'aleksender' },
];

const testSources = [
  'reconquete-ex-qui-revient-early',
  'reconquete-ex-qui-revient-mid',
  'nouvelle-rencontre-trouver-ame-soeur-final',
];

testVoyants.forEach(voyant => {
  testSources.forEach(source => {
    const link = getAffiliateLink(voyant.id, source);
    console.log(`${voyant.nom.padEnd(12)} | ${source.padEnd(45)} | ${link}`);
  });
  console.log('');
});

console.log('\n✅ Liens générés avec succès!');
console.log('\n📝 Prochaines étapes:');
console.log('1. Vérifier que les liens fonctionnent dans votre dashboard affilié');
console.log('2. Remplacer la fonction dans /lib/voyants.ts ligne 89');
console.log('3. Tester le tracking des conversions');
