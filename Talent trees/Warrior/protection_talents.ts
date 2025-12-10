import { std } from "wow/wotlk"

// ============================================================================
// Protection Warrior Talent Tree - Original Tree
// TalentTab ID: 164
// ============================================================================

// Get the Warrior class
const WARRIOR_CLASS = std.Classes.load("WARRIOR")

// Get the original Protection talent tree (index 2)
const PROTECTION_TALENT_TREE = WARRIOR_CLASS.TalentTrees.get()[2]

// Delete all existing talents from the [Tree Name] tree
const existingTalents = PROTECTION_TALENT_TREE.Talents.get()
// Create a copy of the array to avoid issues with deletion during iteration
const talentsToDelete = [...existingTalents]
talentsToDelete.forEach(talent => {
    talent.row.delete()
})


// ============================================================================
// Protection Talents - All spells reference the original Blizzard spell IDs
// ============================================================================

// Row 0 (Tier 1)
// ============================================================================

// Improved Bloodrage - Row 0, Column 0
const IMPROVED_BLOODRAGE = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "improved-bloodrage")
    .Position.set(0, 0)

IMPROVED_BLOODRAGE.Spells.add([12301, 12818]) // 2 ranks

// Shield Specialization - Row 0, Column 1
const SHIELD_SPEC = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "shield-spec")
    .Position.set(0, 1)

SHIELD_SPEC.Spells.add([12298, 12724, 12725, 12726, 12727]) // 5 ranks

// Improved Thunder Clap - Row 0, Column 2
const IMPROVED_THUNDER_CLAP = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "improved-thunder-clap")
    .Position.set(0, 2)

IMPROVED_THUNDER_CLAP.Spells.add([12287, 12665, 12666]) // 3 ranks



// Row 1 (Tier 2)
// ============================================================================

// Incite - Row 1, Column 3
const INCITE = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "incite")
    .Position.set(1, 1)

INCITE.Spells.add([50685, 50686, 50687]) // 3 ranks

// Anticipation - Row 1, Column 0
const Warrior_ANTICIPATION = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "Warrior_anticipation")
    .Position.set(1, 2)

Warrior_ANTICIPATION.Spells.add([12297, 12750, 12751, 12752, 12753]) // 5 ranks


// Row 2 (Tier 3)
// ============================================================================

// Last Stand - Row 2, Column 1
const LAST_STAND = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "last-stand")
    .Position.set(2, 0)

LAST_STAND.Spells.add([12975]) // 1 rank

// Improved Revenge - Row 2, Column 2
const IMPROVED_REVENGE = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "improved-revenge")
    .Position.set(2, 1)

IMPROVED_REVENGE.Spells.add([12797, 12799]) // 3 ranks

// Shield Mastery - Row 2, Column 3
const SHIELD_MASTERY = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "shield-mastery")
    .Position.set(2, 2)

SHIELD_MASTERY.Spells.add([29597, 29598, 29600]) // 3 ranks

// Toughness - Row 2, Column 0
const Warrior_TOUGHNESS = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "Warrior_toughness")
    .Position.set(2, 2)

Warrior_TOUGHNESS.Spells.add([12299, 12761, 12762, 12763, 12764]) // 5 ranks

// Row 3 (Tier 4)
// ============================================================================

// Improved Spell Reflection - Row 3, Column 1
const IMPROVED_SPELL_REFLECTION = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "improved-spell-reflection")
    .Position.set(3, 0)

IMPROVED_SPELL_REFLECTION.Spells.add([59088, 59089]) // 2 ranks

// Improved Disarm - Row 3, Column 2
const IMPROVED_DISARM = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "improved-disarm")
    .Position.set(3, 1)

IMPROVED_DISARM.Spells.add([12313, 12804]) // 3 ranks

// Puncture - Row 3, Column 3
const PUNCTURE = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "puncture")
    .Position.set(3, 2)

PUNCTURE.Spells.add([12308, 12810, 12811]) // 3 ranks

// Row 4 (Tier 5)
// ============================================================================

// Improved Disciplines - Row 4, Column 0
const IMPROVED_DISCIPLINES = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "prot-improved-disciplines")
    .Position.set(4, 0)

IMPROVED_DISCIPLINES.Spells.add([12312, 12803]) // 2 ranks

// Concussion Blow - Row 4, Column 1
const CONCUSSION_BLOW = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "concussion-blow")
    .Position.set(4, 1)

CONCUSSION_BLOW.Spells.add([12809]) // 1 rank

// Gag Order - Row 4, Column 2
const GAG_ORDER = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "gag-order")
    .Position.set(4, 2)

GAG_ORDER.Spells.add([12311, 12958]) // 2 ranks

// Row 5 (Tier 6)
// ============================================================================

// One-Handed Weapon Specialization - Row 4, Column 3
const ONE_HANDED_WEAPON_SPEC = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "one-handed-weapon-spec")
    .Position.set(5, 2)

ONE_HANDED_WEAPON_SPEC.Spells.add([16538, 16539, 16540, 16541, 16542]) // 5 ranks

// Row 6 (Tier 7)
// ============================================================================

// Improved Defensive Stance - Row 4, Column 0
const IMPROVED_DEFENSIVE_STANCE = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "prot-improved-defensive-stance")
    .Position.set(6, 0)

IMPROVED_DEFENSIVE_STANCE.Spells.add([29593, 29594]) // 3 ranks

// Vigilance - Row 4, Column 1
const VIGILANCE = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "vigilance")
    .Position.set(6, 1)
    .Requirements.add(CONCUSSION_BLOW.ID,1)

VIGILANCE.Spells.add([50720]) // 1 rank

// Focused Rage - Row 4, Column 2
const FOCUSED_RAGE = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "prot-focused-rage")
    .Position.set(6, 2)

FOCUSED_RAGE.Spells.add([29787, 29790, 29792]) // 3 ranks

// Row 7 (Tier 8)
// ============================================================================

// Vitality - Row 6, Column 1
const VITALITY = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "vitality")
    .Position.set(7, 1)

VITALITY.Spells.add([29140, 29143, 29144]) // 3 ranks

// Safeguard - Row 6, Column 2
const SAFEGUARD = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "safeguard")
    .Position.set(7, 2)

SAFEGUARD.Spells.add([46945, 46949]) // 2 ranks

// Row 8 (Tier 9)
// ============================================================================

// Devastate - Row 7, Column 1 (Signature Talent)
const Warbringer = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "Warbringer")
    .Position.set(8, 0)

Warbringer.Spells.add([57499]) // 1 rank

// Devastate - Row 7, Column 2 (Signature Talent)
const DEVASTATE = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "devastate")
    .Position.set(8, 1)

DEVASTATE.Spells.add([20243]) // 1 rank

// Critical Block - Row 7, Column 3
const CRITICAL_BLOCK = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "critical-block")
    .Position.set(8, 2)

CRITICAL_BLOCK.Spells.add([47294, 47295, 47296]) // 3 ranks

// Row 9 (Tier 10)
// ============================================================================


// Sword and Board - Row 8, Column 2
const SWORD_AND_BOARD = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "sword-and-board")
    .Position.set(9, 1)
    .Requirements.add(DEVASTATE.ID, 1)

SWORD_AND_BOARD.Spells.add([46951, 46952, 46953]) // 3 ranks

// Damage Shield - Row 7, Column 3
const DAMAGE_SHIELD = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "damage-shield")
    .Position.set(9, 2)

DAMAGE_SHIELD.Spells.add([58872, 58874]) // 2 ranks

// Row 10 (Tier 11)
// ============================================================================

// Shockwave - Row 7, Column 2
const SHOCKWAVE = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "shockwave")
    .Position.set(10, 1)

SHOCKWAVE.Spells.add([46968]) // 1 rank
