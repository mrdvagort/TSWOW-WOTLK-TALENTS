import { std } from "wow/wotlk"

// ============================================================================
// Survival Hunter Talent Tree - Original Tree
// TalentTab ID: 362
// ============================================================================

// Get the Hunter class
const HUNTER_CLASS = std.Classes.load("HUNTER")

// Get the Survival talent tree (index 2)
 const SURVIVAL_TALENT_TREE = HUNTER_CLASS.TalentTrees.get()[2]

// Delete all existing talents from the Survival tree
const existingTalents = SURVIVAL_TALENT_TREE.Talents.get()
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

// Improved Tracking - Row 0, Column 0
 const IMPROVED_TRACKING = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "improved-tracking")
    .Position.set(0, 0)

IMPROVED_TRACKING.Spells.add([52783, 52785, 52786, 52787, 52788]) // 5 ranks

// Hawk Eye - Row 0, Column 1
 const HAWK_EYE = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "hawk-eye")
    .Position.set(0, 1)

HAWK_EYE.Spells.add([19498, 19499, 19500]) // 3 ranks

// Savage Strikes - Row 0, Column 2
 const SAVAGE_STRIKES = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "savage-strikes")
    .Position.set(0, 2)

SAVAGE_STRIKES.Spells.add([19159, 19160]) // 2 ranks


// Row 1 (Tier 2)
// ============================================================================

// Surefooted - Row 1, Column 0
 const SUREFOOTED = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "surefooted")
    .Position.set(1, 0)

SUREFOOTED.Spells.add([19290, 19294, 24283]) // 3 ranks

// Entrapment - Row 1, Column 1
 const ENTRAPMENT = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "entrapment")
    .Position.set(1, 1)

ENTRAPMENT.Spells.add([19184, 19387, 19388]) // 3 ranks

// Trap Mastery - Row 1, Column 2
 const TRAP_MASTERY = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "trap-mastery")
    .Position.set(1, 2)

TRAP_MASTERY.Spells.add([19376, 63457, 63458]) // 3 ranks

// Survival Instincts - Row 1, Column 3
 const Survival_SURVIVAL_INSTINCTS = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "Survival_survival-instincts")
    .Position.set(1, 3)

Survival_SURVIVAL_INSTINCTS.Spells.add([34494, 34496]) // 2 ranks


// Row 2 (Tier 3)
// ============================================================================

// Survivalist - Row 2, Column 0
 const SURVIVALIST = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "survivalist")
    .Position.set(2, 0)

SURVIVALIST.Spells.add([19255, 19256, 19257, 19258, 19259]) // 5 ranks

// Scatter Shot - Row 2, Column 1
 const SCATTER_SHOT = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "scatter-shot")
    .Position.set(2, 1)

SCATTER_SHOT.Spells.add([19503]) // 1 rank

// Deflection - Row 2, Column 2
 const HUNTER_DEFLECTION = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "HUNTER_deflection")
    .Position.set(2, 2)

HUNTER_DEFLECTION.Spells.add([19295, 19297, 19298]) // 3 ranks

// Survival Tactics - Row 2, Column 3
 const SURVIVAL_TACTICS = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "survival-tactics")
    .Position.set(2, 3)

SURVIVAL_TACTICS.Spells.add([19286, 19287]) // 2 ranks


// Row 3 (Tier 4)
// ============================================================================

// T.N.T. - Row 3, Column 1
 const T_N_T = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "t-n-t")
    .Position.set(3, 1)

T_N_T.Spells.add([56333, 56336, 56337]) // 3 ranks

// Lock and Load - Row 3, Column 3
 const LOCK_AND_LOAD = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "lock-and-load")
    .Position.set(3, 3)

LOCK_AND_LOAD.Spells.add([56342, 56343, 56344]) // 3 ranks


// Row 4 (Tier 5)
// ============================================================================

// Hunter vs. Wild - Row 4, Column 0
 const HUNTER_VS_WILD = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "hunter-vs-wild")
    .Position.set(4, 0)
    .Requirements.add(SURVIVALIST.ID, 5)

HUNTER_VS_WILD.Spells.add([56339, 56340, 56341]) // 3 ranks

// Killer Instinct - Row 4, Column 1
 const KILLER_INSTINCT = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "killer-instinct")
    .Position.set(4, 1)

KILLER_INSTINCT.Spells.add([19370, 19371, 19373]) // 3 ranks

// Counterattack - Row 4, Column 2
 const COUNTERATTACK = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "counterattack")
    .Position.set(4, 2)
    .Requirements.add(HUNTER_DEFLECTION.ID, 3)

COUNTERATTACK.Spells.add([19306]) // 1 rank


// Row 5 (Tier 6)
// ============================================================================

// Lightning Reflexes - Row 5, Column 0
 const LIGHTNING_REFLEXES = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "lightning-reflexes")
    .Position.set(5, 0)

LIGHTNING_REFLEXES.Spells.add([19168, 19180, 19181, 24296, 24297]) // 5 ranks

// Resourcefulness - Row 5, Column 2
 const RESOURCEFULNESS = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "resourcefulness")
    .Position.set(5, 2)

RESOURCEFULNESS.Spells.add([34491, 34492, 34493]) // 3 ranks


// Row 6 (Tier 7)
// ============================================================================

// Expose Weakness - Row 6, Column 0
 const EXPOSE_WEAKNESS = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "expose-weakness")
    .Position.set(6, 0)

EXPOSE_WEAKNESS.Spells.add([34500, 34502, 34503]) // 3 ranks

// Wyvern Sting - Row 6, Column 1
 const WYVERN_STING = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "wyvern-sting")
    .Position.set(6, 1)
    .Requirements.add(KILLER_INSTINCT.ID, 3)

WYVERN_STING.Spells.add([19386]) // 1 rank

// Thrill of the Hunt - Row 6, Column 2
 const THRILL_OF_THE_HUNT = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "thrill-of-the-hunt")
    .Position.set(6, 2)

THRILL_OF_THE_HUNT.Spells.add([34497, 34498, 34499]) // 3 ranks


// Row 7 (Tier 8)
// ============================================================================

// Master Tactician - Row 7, Column 0
 const MASTER_TACTICIAN = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "master-tactician")
    .Position.set(7, 0)

MASTER_TACTICIAN.Spells.add([34506, 34507, 34508, 34838, 34839]) // 5 ranks

// Noxious Stings - Row 7, Column 1
 const NOXIOUS_STINGS = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "noxious-stings")
    .Position.set(7, 1)

NOXIOUS_STINGS.Spells.add([53295, 53296, 53297]) // 3 ranks


// Row 8 (Tier 9)
// ============================================================================

// Point of No Escape - Row 8, Column 0
 const POINT_OF_NO_ESCAPE = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "point-of-no-escape")
    .Position.set(8, 0)

POINT_OF_NO_ESCAPE.Spells.add([53298, 53299]) // 2 ranks

// Black Arrow - Row 8, Column 1
 const BLACK_ARROW = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "black-arrow")
    .Position.set(8, 1)

BLACK_ARROW.Spells.add([3674]) // 1 rank

// Sniper Training - Row 8, Column 3
 const SNIPER_TRAINING = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "sniper-training")
    .Position.set(8, 3)

SNIPER_TRAINING.Spells.add([53302, 53303, 53304]) // 3 ranks


// Row 9 (Tier 10)
// ============================================================================

// Hunting Party - Row 9, Column 2
 const HUNTING_PARTY = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "hunting-party")
    .Position.set(9, 2)
    .Requirements.add(THRILL_OF_THE_HUNT.ID, 3)

HUNTING_PARTY.Spells.add([53290, 53291, 53292]) // 3 ranks


// Row 10 (Tier 11)
// ============================================================================

// Explosive Shot - Row 10, Column 1
 const EXPLOSIVE_SHOT = SURVIVAL_TALENT_TREE.Talents
    .addGet("default", "explosive-shot")
    .Position.set(10, 1)
    .Requirements.add(BLACK_ARROW.ID, 1)

EXPLOSIVE_SHOT.Spells.add([53301]) // 1 rank
