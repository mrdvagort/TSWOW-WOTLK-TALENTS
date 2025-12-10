import { std } from "wow/wotlk"

// ============================================================================
// Demonology Warlock Talent Tree - Original Tree
// TalentTab ID: 303
// ============================================================================

// Get the Warlock class
const WARLOCK_CLASS = std.Classes.load("WARLOCK")

// Get the Demonology talent tree (index 1)
 const DEMONOLOGY_TALENT_TREE = WARLOCK_CLASS.TalentTrees.get()[1]

// Delete all existing talents from the Demonology tree
const existingTalents = DEMONOLOGY_TALENT_TREE.Talents.get()
// Create a copy of the array to avoid issues with deletion during iteration
const talentsToDelete = [...existingTalents]
talentsToDelete.forEach(talent => {
    talent.row.delete()
})


// ============================================================================
// PASTE PRINTER OUTPUT BELOW THIS LINE
// ============================================================================

// Row 0 (Tier 1)
// ============================================================================

// Improved Healthstone - Row 0, Column 0
 const IMPROVED_HEALTHSTONE = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "improved-healthstone")
    .Position.set(0, 0)

IMPROVED_HEALTHSTONE.Spells.add([18692, 18693]) // 2 ranks

// Improved Imp - Row 0, Column 1
 const IMPROVED_IMP = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "improved-imp")
    .Position.set(0, 1)

IMPROVED_IMP.Spells.add([18694, 18695, 18696]) // 3 ranks

// Demonic Embrace - Row 0, Column 2
 const DEMONIC_EMBRACE = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "demonic-embrace")
    .Position.set(0, 2)

DEMONIC_EMBRACE.Spells.add([18697, 18698, 18699]) // 3 ranks

// Fel Synergy - Row 0, Column 3
 const FEL_SYNERGY = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "fel-synergy")
    .Position.set(0, 3)

FEL_SYNERGY.Spells.add([47230, 47231]) // 2 ranks


// Row 1 (Tier 2)
// ============================================================================

// Improved Health Funnel - Row 1, Column 0
 const IMPROVED_HEALTH_FUNNEL = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "improved-health-funnel")
    .Position.set(1, 0)

IMPROVED_HEALTH_FUNNEL.Spells.add([18703, 18704]) // 2 ranks

// Demonic Brutality - Row 1, Column 1
 const DEMONIC_BRUTALITY = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "demonic-brutality")
    .Position.set(1, 1)

DEMONIC_BRUTALITY.Spells.add([18705, 18706, 18707]) // 3 ranks

// Fel Vitality - Row 1, Column 2
 const FEL_VITALITY = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "fel-vitality")
    .Position.set(1, 2)

FEL_VITALITY.Spells.add([18731, 18743, 18744]) // 3 ranks


// Row 2 (Tier 3)
// ============================================================================

// Improved Succubus - Row 2, Column 0
 const IMPROVED_SUCCUBUS = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "improved-succubus")
    .Position.set(2, 0)

IMPROVED_SUCCUBUS.Spells.add([18754, 18755, 18756]) // 3 ranks

// Soul Link - Row 2, Column 1
 const SOUL_LINK = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "soul-link")
    .Position.set(2, 1)

SOUL_LINK.Spells.add([19028]) // 1 rank

// Fel Domination - Row 2, Column 2
 const FEL_DOMINATION = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "fel-domination")
    .Position.set(2, 2)

FEL_DOMINATION.Spells.add([18708]) // 1 rank

// Demonic Aegis - Row 2, Column 3
 const DEMONIC_AEGIS = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "demonic-aegis")
    .Position.set(2, 3)

DEMONIC_AEGIS.Spells.add([30143, 30144, 30145]) // 3 ranks


// Row 3 (Tier 4)
// ============================================================================

// Unholy Power - Row 3, Column 1
 const UNHOLY_POWER = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "unholy-power")
    .Position.set(3, 1)

UNHOLY_POWER.Spells.add([18769, 18770, 18771, 18772, 18773]) // 5 ranks

// Master Summoner - Row 3, Column 2
 const MASTER_SUMMONER = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "master-summoner")
    .Position.set(3, 2)

MASTER_SUMMONER.Spells.add([18709, 18710]) // 2 ranks


// Row 4 (Tier 5)
// ============================================================================

// Mana Feed - Row 4, Column 0
 const MANA_FEED = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "mana-feed")
    .Position.set(4, 0)

MANA_FEED.Spells.add([30326]) // 1 rank

// Master Conjuror - Row 4, Column 2
 const MASTER_CONJUROR = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "master-conjuror")
    .Position.set(4, 2)

MASTER_CONJUROR.Spells.add([18767, 18768]) // 2 ranks


// Row 5 (Tier 6)
// ============================================================================

// Master Demonologist - Row 5, Column 1
 const MASTER_DEMONOLOGIST = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "master-demonologist")
    .Position.set(5, 1)

MASTER_DEMONOLOGIST.Spells.add([23785, 23822, 23823, 23824, 23825]) // 5 ranks

// Molten Core - Row 5, Column 2
 const MOLTEN_CORE = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "molten-core")
    .Position.set(5, 2)

MOLTEN_CORE.Spells.add([47245, 47246, 47247]) // 3 ranks


// Row 6 (Tier 7)
// ============================================================================

// Demonic Resilience - Row 6, Column 0
 const DEMONIC_RESILIENCE = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "demonic-resilience")
    .Position.set(6, 0)

DEMONIC_RESILIENCE.Spells.add([30319, 30320, 30321]) // 3 ranks

// Demonic Empowerment - Row 6, Column 1
 const DEMONIC_EMPOWERMENT = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "demonic-empowerment")
    .Position.set(6, 1)

DEMONIC_EMPOWERMENT.Spells.add([47193]) // 1 rank

// Demonic Knowledge - Row 6, Column 2
 const DEMONIC_KNOWLEDGE = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "demonic-knowledge")
    .Position.set(6, 2)

DEMONIC_KNOWLEDGE.Spells.add([35691, 35692, 35693]) // 3 ranks


// Row 7 (Tier 8)
// ============================================================================

// Demonic Tactics - Row 7, Column 1
 const DEMONIC_TACTICS = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "demonic-tactics")
    .Position.set(7, 1)

DEMONIC_TACTICS.Spells.add([30242, 30245, 30246, 30247, 30248]) // 5 ranks

// Decimation - Row 7, Column 2
 const DECIMATION = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "decimation")
    .Position.set(7, 2)

DECIMATION.Spells.add([63156, 63158]) // 2 ranks


// Row 8 (Tier 9)
// ============================================================================

// Improved Demonic Tactics - Row 8, Column 0
 const IMPROVED_DEMONIC_TACTICS = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "improved-demonic-tactics")
    .Position.set(8, 0)

IMPROVED_DEMONIC_TACTICS.Spells.add([54347, 54348, 54349]) // 3 ranks

// Summon Felguard - Row 8, Column 1
 const SUMMON_FELGUARD = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "summon-felguard")
    .Position.set(8, 1)

SUMMON_FELGUARD.Spells.add([30146]) // 1 rank

// Nemesis - Row 8, Column 2
 const NEMESIS = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "nemesis")
    .Position.set(8, 2)

NEMESIS.Spells.add([63117, 63121, 63123]) // 3 ranks


// Row 9 (Tier 10)
// ============================================================================

// Demonic Pact - Row 9, Column 1
 const DEMONIC_PACT = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "demonic-pact")
    .Position.set(9, 1)

DEMONIC_PACT.Spells.add([47236, 47237, 47238, 47239, 47240]) // 5 ranks


// Row 10 (Tier 11)
// ============================================================================

// Metamorphosis - Row 10, Column 1
 const METAMORPHOSIS = DEMONOLOGY_TALENT_TREE.Talents
    .addGet("default", "metamorphosis")
    .Position.set(10, 1)

METAMORPHOSIS.Spells.add([59672]) // 1 rank