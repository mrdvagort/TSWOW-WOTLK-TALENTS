import { std } from "wow/wotlk"

// ============================================================================
// Subtlety Rogue Talent Tree - Original Tree
// TalentTab ID: 183
// ============================================================================

// Get the Rogue class
const ROGUE_CLASS = std.Classes.load("ROGUE")

// Get the Subtlety talent tree (index 2)
 const SUBTLETY_TALENT_TREE = ROGUE_CLASS.TalentTrees.get()[2]

// Delete all existing talents from the Subtlety tree
const existingTalents = SUBTLETY_TALENT_TREE.Talents.get()
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

// Relentless Strikes - Row 0, Column 0
 const RELENTLESS_STRIKES = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "relentless-strikes")
    .Position.set(0, 0)

RELENTLESS_STRIKES.Spells.add([14179, 58422, 58423, 58424, 58425]) // 5 ranks

// Master of Deception - Row 0, Column 1
 const MASTER_OF_DECEPTION = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "master-of-deception")
    .Position.set(0, 1)

MASTER_OF_DECEPTION.Spells.add([13958, 13970, 13971]) // 3 ranks

// Opportunity - Row 0, Column 2
 const OPPORTUNITY = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "opportunity")
    .Position.set(0, 2)

OPPORTUNITY.Spells.add([14057, 14072]) // 2 ranks


// Row 1 (Tier 2)
// ============================================================================

// Sleight of Hand - Row 1, Column 0
 const SLEIGHT_OF_HAND = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "sleight-of-hand")
    .Position.set(1, 0)

SLEIGHT_OF_HAND.Spells.add([30892, 30893]) // 2 ranks

// Dirty Tricks - Row 1, Column 1
 const DIRTY_TRICKS = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "dirty-tricks")
    .Position.set(1, 1)

DIRTY_TRICKS.Spells.add([14076, 14094]) // 2 ranks

// Camouflage - Row 1, Column 2
 const CAMOUFLAGE = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "camouflage")
    .Position.set(1, 2)

CAMOUFLAGE.Spells.add([13975, 14062, 14063]) // 3 ranks


// Row 2 (Tier 3)
// ============================================================================

// Elusiveness - Row 2, Column 0
 const ELUSIVENESS = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "elusiveness")
    .Position.set(2, 0)

ELUSIVENESS.Spells.add([13981, 14066]) // 2 ranks

// Ghostly Strike - Row 2, Column 1
 const GHOSTLY_STRIKE = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "ghostly-strike")
    .Position.set(2, 1)

GHOSTLY_STRIKE.Spells.add([14278]) // 1 rank

// Serrated Blades - Row 2, Column 2
 const SERRATED_BLADES = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "serrated-blades")
    .Position.set(2, 2)

SERRATED_BLADES.Spells.add([14171, 14172, 14173]) // 3 ranks


// Row 3 (Tier 4)
// ============================================================================

// Setup - Row 3, Column 0
 const SETUP = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "setup")
    .Position.set(3, 0)

SETUP.Spells.add([13983, 14070, 14071]) // 3 ranks

// Initiative - Row 3, Column 1
 const INITIATIVE = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "initiative")
    .Position.set(3, 1)

INITIATIVE.Spells.add([13976, 13979, 13980]) // 3 ranks

// Improved Ambush - Row 3, Column 2
 const IMPROVED_AMBUSH = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "improved-ambush")
    .Position.set(3, 2)

IMPROVED_AMBUSH.Spells.add([14079, 14080]) // 2 ranks


// Row 4 (Tier 5)
// ============================================================================

// Heightened Senses - Row 4, Column 0
 const HEIGHTENED_SENSES = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "heightened-senses")
    .Position.set(4, 0)

HEIGHTENED_SENSES.Spells.add([30894, 30895]) // 2 ranks

// Preparation - Row 4, Column 1
 const PREPARATION = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "preparation")
    .Position.set(4, 1)

PREPARATION.Spells.add([14185]) // 1 rank

// Dirty Deeds - Row 4, Column 2
 const DIRTY_DEEDS = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "dirty-deeds")
    .Position.set(4, 2)

DIRTY_DEEDS.Spells.add([14082, 14083]) // 2 ranks

// Hemorrhage - Row 4, Column 3
 const HEMORRHAGE = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "hemorrhage")
    .Position.set(4, 3)
    .Requirements.add(SERRATED_BLADES.ID, 3)

HEMORRHAGE.Spells.add([16511]) // 1 rank


// Row 5 (Tier 6)
// ============================================================================

// Master of Subtlety - Row 5, Column 0
 const MASTER_OF_SUBTLETY = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "master-of-subtlety")
    .Position.set(5, 0)

MASTER_OF_SUBTLETY.Spells.add([31221, 31222, 31223]) // 3 ranks

// Deadliness - Row 5, Column 2
 const DEADLINESS = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "deadliness")
    .Position.set(5, 2)

DEADLINESS.Spells.add([30902, 30903, 30904, 30905, 30906]) // 5 ranks


// Row 6 (Tier 7)
// ============================================================================

// Enveloping Shadows - Row 6, Column 0
 const ENVELOPING_SHADOWS = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "enveloping-shadows")
    .Position.set(6, 0)

ENVELOPING_SHADOWS.Spells.add([31211, 31212, 31213]) // 3 ranks

// Premeditation - Row 6, Column 1
 const PREMEDITATION = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "premeditation")
    .Position.set(6, 1)
    .Requirements.add(PREPARATION.ID, 1)

PREMEDITATION.Spells.add([14183]) // 1 rank

// Cheat Death - Row 6, Column 2
 const CHEAT_DEATH = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "cheat-death")
    .Position.set(6, 2)

CHEAT_DEATH.Spells.add([31228, 31229, 31230]) // 3 ranks


// Row 7 (Tier 8)
// ============================================================================

// Sinister Calling - Row 7, Column 1
 const SINISTER_CALLING = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "sinister-calling")
    .Position.set(7, 1)
    .Requirements.add(PREMEDITATION.ID, 1)

SINISTER_CALLING.Spells.add([31216, 31217, 31218, 31219, 31220]) // 5 ranks

// Waylay - Row 7, Column 2
 const WAYLAY = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "waylay")
    .Position.set(7, 2)

WAYLAY.Spells.add([51692, 51696]) // 2 ranks


// Row 8 (Tier 9)
// ============================================================================

// Honor Among Thieves - Row 8, Column 0
 const HONOR_AMONG_THIEVES = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "honor-among-thieves")
    .Position.set(8, 0)

HONOR_AMONG_THIEVES.Spells.add([51698, 51700, 51701]) // 3 ranks

// Shadowstep - Row 8, Column 1
 const SHADOWSTEP = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "shadowstep")
    .Position.set(8, 1)

SHADOWSTEP.Spells.add([36554]) // 1 rank

// Filthy Tricks - Row 8, Column 2
 const FILTHY_TRICKS = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "filthy-tricks")
    .Position.set(8, 2)

FILTHY_TRICKS.Spells.add([58414, 58415]) // 2 ranks


// Row 9 (Tier 10)
// ============================================================================

// Slaughter from the Shadows - Row 9, Column 1
 const SLAUGHTER_FROM_THE_SHADOWS = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "slaughter-from-the-shadows")
    .Position.set(9, 1)

SLAUGHTER_FROM_THE_SHADOWS.Spells.add([51708, 51709, 51710, 51711, 51712]) // 5 ranks


// Row 10 (Tier 11)
// ============================================================================

// Shadow Dance - Row 10, Column 1
 const SHADOW_DANCE = SUBTLETY_TALENT_TREE.Talents
    .addGet("default", "shadow-dance")
    .Position.set(10, 1)

SHADOW_DANCE.Spells.add([51713]) // 1 rank
