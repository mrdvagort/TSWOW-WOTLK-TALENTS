import { std } from "wow/wotlk"

// ============================================================================
// Arcane Mage Talent Tree - Original Tree
// TalentTab ID: 81
// ============================================================================

// Get the Mage class
const MAGE_CLASS = std.Classes.load("MAGE")

// Get the Arcane talent tree (index 0)
 const ARCANE_TALENT_TREE = MAGE_CLASS.TalentTrees.get()[0]

// Delete all existing talents from the Arcane tree
const existingTalents = ARCANE_TALENT_TREE.Talents.get()
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

// Arcane Subtlety - Row 0, Column 0
 const ARCANE_SUBTLETY = ARCANE_TALENT_TREE.Talents
    .addGet("default", "arcane-subtlety")
    .Position.set(0, 0)

ARCANE_SUBTLETY.Spells.add([11210, 12592]) // 2 ranks

// Arcane Focus - Row 0, Column 1
 const ARCANE_FOCUS = ARCANE_TALENT_TREE.Talents
    .addGet("default", "arcane-focus")
    .Position.set(0, 1)

ARCANE_FOCUS.Spells.add([11222, 12839, 12840]) // 3 ranks

// Arcane Stability - Row 0, Column 2
 const ARCANE_STABILITY = ARCANE_TALENT_TREE.Talents
    .addGet("default", "arcane-stability")
    .Position.set(0, 2)

ARCANE_STABILITY.Spells.add([11237, 12463, 12464, 16769, 16770]) // 5 ranks


// Row 1 (Tier 2)
// ============================================================================

// Arcane Fortitude - Row 1, Column 0
 const ARCANE_FORTITUDE = ARCANE_TALENT_TREE.Talents
    .addGet("default", "arcane-fortitude")
    .Position.set(1, 0)

ARCANE_FORTITUDE.Spells.add([28574, 54658, 54659]) // 3 ranks

// Magic Absorption - Row 1, Column 1
 const MAGIC_ABSORPTION = ARCANE_TALENT_TREE.Talents
    .addGet("default", "magic-absorption")
    .Position.set(1, 1)

MAGIC_ABSORPTION.Spells.add([29441, 29444]) // 2 ranks

// Arcane Concentration - Row 1, Column 2
 const ARCANE_CONCENTRATION = ARCANE_TALENT_TREE.Talents
    .addGet("default", "arcane-concentration")
    .Position.set(1, 2)

ARCANE_CONCENTRATION.Spells.add([11213, 12574, 12575, 12576, 12577]) // 5 ranks


// Row 2 (Tier 3)
// ============================================================================

// Magic Attunement - Row 2, Column 0
 const MAGIC_ATTUNEMENT = ARCANE_TALENT_TREE.Talents
    .addGet("default", "magic-attunement")
    .Position.set(2, 0)

MAGIC_ATTUNEMENT.Spells.add([11247, 12606]) // 2 ranks

// Spell Impact - Row 2, Column 1
 const SPELL_IMPACT = ARCANE_TALENT_TREE.Talents
    .addGet("default", "spell-impact")
    .Position.set(2, 1)

SPELL_IMPACT.Spells.add([11242, 12467, 12469]) // 3 ranks

// Student of the Mind - Row 2, Column 2
 const STUDENT_OF_THE_MIND = ARCANE_TALENT_TREE.Talents
    .addGet("default", "student-of-the-mind")
    .Position.set(2, 2)

STUDENT_OF_THE_MIND.Spells.add([44397, 44398, 44399]) // 3 ranks

// Focus Magic - Row 2, Column 3
 const FOCUS_MAGIC = ARCANE_TALENT_TREE.Talents
    .addGet("default", "focus-magic")
    .Position.set(2, 3)

FOCUS_MAGIC.Spells.add([54646]) // 1 rank


// Row 3 (Tier 4)
// ============================================================================

// Arcane Shielding - Row 3, Column 0
 const ARCANE_SHIELDING = ARCANE_TALENT_TREE.Talents
    .addGet("default", "arcane-shielding")
    .Position.set(3, 0)

ARCANE_SHIELDING.Spells.add([11252, 12605]) // 2 ranks

// Improved Counterspell - Row 3, Column 1
 const IMPROVED_COUNTERSPELL = ARCANE_TALENT_TREE.Talents
    .addGet("default", "improved-counterspell")
    .Position.set(3, 1)

IMPROVED_COUNTERSPELL.Spells.add([11255, 12598]) // 2 ranks

// Arcane Meditation - Row 3, Column 2
 const ARCANE_MEDITATION = ARCANE_TALENT_TREE.Talents
    .addGet("default", "arcane-meditation")
    .Position.set(3, 2)

ARCANE_MEDITATION.Spells.add([18462, 18463, 18464]) // 3 ranks

// Torment the Weak - Row 3, Column 3
 const TORMENT_THE_WEAK = ARCANE_TALENT_TREE.Talents
    .addGet("default", "torment-the-weak")
    .Position.set(3, 3)

TORMENT_THE_WEAK.Spells.add([29447, 55339, 55340]) // 3 ranks


// Row 4 (Tier 5)
// ============================================================================

// Improved Blink - Row 4, Column 0
 const IMPROVED_BLINK = ARCANE_TALENT_TREE.Talents
    .addGet("default", "improved-blink")
    .Position.set(4, 0)

IMPROVED_BLINK.Spells.add([31569, 31570]) // 2 ranks

// Presence of Mind - Row 4, Column 1
 const PRESENCE_OF_MIND = ARCANE_TALENT_TREE.Talents
    .addGet("default", "presence-of-mind")
    .Position.set(4, 1)

PRESENCE_OF_MIND.Spells.add([12043]) // 1 rank

// Arcane Mind - Row 4, Column 3
 const ARCANE_MIND = ARCANE_TALENT_TREE.Talents
    .addGet("default", "arcane-mind")
    .Position.set(4, 3)

ARCANE_MIND.Spells.add([11232, 12500, 12501, 12502, 12503]) // 5 ranks


// Row 5 (Tier 6)
// ============================================================================

// Prismatic Cloak - Row 5, Column 0
 const PRISMATIC_CLOAK = ARCANE_TALENT_TREE.Talents
    .addGet("default", "prismatic-cloak")
    .Position.set(5, 0)

PRISMATIC_CLOAK.Spells.add([31574, 31575, 54354]) // 3 ranks

// Arcane Instability - Row 5, Column 1
 const ARCANE_INSTABILITY = ARCANE_TALENT_TREE.Talents
    .addGet("default", "arcane-instability")
    .Position.set(5, 1)
    .Requirements.add(PRESENCE_OF_MIND.ID, 1)

ARCANE_INSTABILITY.Spells.add([15058, 15059, 15060]) // 3 ranks

// Arcane Potency - Row 5, Column 2
 const ARCANE_POTENCY = ARCANE_TALENT_TREE.Talents
    .addGet("default", "arcane-potency")
    .Position.set(5, 2)
    .Requirements.add(PRESENCE_OF_MIND.ID, 1)

ARCANE_POTENCY.Spells.add([31571, 31572]) // 2 ranks


// Row 6 (Tier 7)
// ============================================================================

// Arcane Empowerment - Row 6, Column 0
 const ARCANE_EMPOWERMENT = ARCANE_TALENT_TREE.Talents
    .addGet("default", "arcane-empowerment")
    .Position.set(6, 0)

ARCANE_EMPOWERMENT.Spells.add([31579, 31582, 31583]) // 3 ranks

// Arcane Power - Row 6, Column 1
 const ARCANE_POWER = ARCANE_TALENT_TREE.Talents
    .addGet("default", "arcane-power")
    .Position.set(6, 1)

ARCANE_POWER.Spells.add([12042]) // 1 rank

// Incanter's Absorption - Row 6, Column 2
 const INCANTER_S_ABSORPTION = ARCANE_TALENT_TREE.Talents
    .addGet("default", "incanter-s-absorption")
    .Position.set(6, 2)

INCANTER_S_ABSORPTION.Spells.add([44394, 44395, 44396]) // 3 ranks


// Row 7 (Tier 8)
// ============================================================================

// Arcane Flows - Row 7, Column 1
 const ARCANE_FLOWS = ARCANE_TALENT_TREE.Talents
    .addGet("default", "arcane-flows")
    .Position.set(7, 1)

ARCANE_FLOWS.Spells.add([44378, 44379]) // 2 ranks

// Mind Mastery - Row 7, Column 2
 const MIND_MASTERY = ARCANE_TALENT_TREE.Talents
    .addGet("default", "mind-mastery")
    .Position.set(7, 2)

MIND_MASTERY.Spells.add([31584, 31585, 31586, 31587, 31588]) // 5 ranks


// Row 8 (Tier 9)
// ============================================================================

// Slow - Row 8, Column 1
 const SLOW = ARCANE_TALENT_TREE.Talents
    .addGet("default", "slow")
    .Position.set(8, 1)

SLOW.Spells.add([31589]) // 1 rank

// Missile Barrage - Row 8, Column 2
 const MISSILE_BARRAGE = ARCANE_TALENT_TREE.Talents
    .addGet("default", "missile-barrage")
    .Position.set(8, 2)

MISSILE_BARRAGE.Spells.add([44404, 54486, 54488, 54489, 54490]) // 5 ranks


// Row 9 (Tier 10)
// ============================================================================

// Netherwind Presence - Row 9, Column 1
 const NETHERWIND_PRESENCE = ARCANE_TALENT_TREE.Talents
    .addGet("default", "netherwind-presence")
    .Position.set(9, 1)

NETHERWIND_PRESENCE.Spells.add([44400, 44402, 44403]) // 3 ranks

// Spell Power - Row 9, Column 2
 const SPELL_POWER = ARCANE_TALENT_TREE.Talents
    .addGet("default", "spell-power")
    .Position.set(9, 2)

SPELL_POWER.Spells.add([35578, 35581]) // 2 ranks


// Row 10 (Tier 11)
// ============================================================================

// Arcane Barrage - Row 10, Column 1
 const ARCANE_BARRAGE = ARCANE_TALENT_TREE.Talents
    .addGet("default", "arcane-barrage")
    .Position.set(10, 1)

ARCANE_BARRAGE.Spells.add([44425]) // 1 rank