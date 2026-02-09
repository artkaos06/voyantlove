/**
 * Test de génération des liens affiliés MonSiteVoyance
 * Exécuter avec: npx tsx test_affiliate_links.ts
 */

import { getAffiliateLink } from './lib/voyants';
import voyants from './data/voyants.json';

console.log('🔗 Test Génération Liens Affiliés MonSiteVoyance\n');
console.log('=' .repeat(120));

// Test avec les 3 premiers voyants
const testCases = [
  { voyant: voyants[0], source: 'reconquete-ex-qui-revient-early' },
  { voyant: voyants[1], source: 'reconquete-ex-qui-revient-mid' },
  { voyant: voyants[2], source: 'nouvelle-rencontre-trouver-ame-soeur-final' },
  { voyant: voyants[3], source: 'sentiments-avenir-amoureux-mid' },
];

console.log('\n📋 Exemples de liens générés:\n');

testCases.forEach(({ voyant, source }) => {
  const link = getAffiliateLink(voyant.ID, source);
  console.log(`\n${voyant.VOYANT.toUpperCase()} (ID: ${voyant.ID})`);
  console.log(`Source: ${source}`);
  console.log(`Lien: ${link}`);
  console.log('-'.repeat(120));
});

console.log('\n✅ Format des liens:');
console.log('https://www.monsitevoyance.com/zoom_voyant.php?id={VOYANT_ID}&partner=383&ref={SOURCE}');

console.log('\n📊 Paramètres de tracking:');
console.log('- id: Identifiant du voyant');
console.log('- partner: 383 (votre ID partenaire)');
console.log('- ref: Source de tracking (hub-page-position)');

console.log('\n🎯 Exemples de sources pour tracking:');
console.log('- reconquete-ex-qui-revient-early');
console.log('- reconquete-ex-qui-revient-mid');
console.log('- reconquete-ex-qui-revient-final');
console.log('- nouvelle-rencontre-trouver-ame-soeur-mid');
console.log('- rupture-oublier-son-ex-final');

console.log('\n💡 Le paramètre "ref" vous permet de tracker:');
console.log('  • Quel hub génère le plus de clics (reconquete, rupture, etc.)');
console.log('  • Quelle page convertit le mieux');
console.log('  • Quelle position CTA performe (early, mid, final)');

console.log('\n📈 Prochaine étape:');
console.log('Vérifiez que ces liens fonctionnent en ouvrant un dans votre navigateur:');
console.log(getAffiliateLink(voyants[1].ID, 'test-integration'));
