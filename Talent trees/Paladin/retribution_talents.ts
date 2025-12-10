import { std } from "wow/wotlk"

// ============================================================================
// Retribution Paladin Talent Tree - Original Tree
// TalentTab ID: 383
// ============================================================================

// Get the Paladin class
const PALADIN_CLASS = std.Classes.load("PALADIN")

// Get the original Retribution talent tree (index 2)
export const RETRIBUTION_TALENT_TREE = PALADIN_CLASS.TalentTrees.get()[2]

// Delete all existing talents from the Retribution tree
const existingTalents = RETRIBUTION_TALENT_TREE.Talents.get()
// Create a copy of the array to avoid issues with deletion during iteration
const talentsToDelete = [...existingTalents]
talentsToDelete.forEach(talent => {
    talent.row.delete()
})


// ============================================================================
// Retribution Talents - All spells reference the original Blizzard spell IDs
// ============================================================================

// Row 0 (Tier 1)
// ============================================================================

// Deflection - Row 0, Column 0
export const RETRIBUTION_DEFLECTION = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "retribution-deflection")
    .Position.set(0, 1)

RETRIBUTION_DEFLECTION.Spells.add([20224, 20225, 20330, 20331, 20332]) // 5 ranks

// Benediction - Row 0, Column 2
export const BENEDICTION = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "benediction")
    .Position.set(0, 2)

BENEDICTION.Spells.add([20101, 20102, 20103, 20104, 20105]) // 5 ranks

// Row 1 (Tier 2)
// ============================================================================

// Improved Judgements - Row 1, Column 0
export const IMPROVED_JUDGEMENTS = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "improved-judgements")
    .Position.set(1, 0)

IMPROVED_JUDGEMENTS.Spells.add([25956, 25957]) // 2 ranks

// Heart of the Crusader - Row 1, Column 1
export const HEART_OF_THE_CRUSADER = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "heart-of-the-crusader")
    .Position.set(1, 1)

HEART_OF_THE_CRUSADER.Spells.add([20335, 20336, 20337]) // 3 ranks

// Improved Blessing of Might - Row 1, Column 2
export const IMPROVED_BLESSING_OF_MIGHT = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "improved-blessing-of-might")
    .Position.set(1, 2)

IMPROVED_BLESSING_OF_MIGHT.Spells.add([20042, 20045]) // 2 ranks

// Row 2 (Tier 3)
// ============================================================================

// Vindication - Row 2, Column 0
export const VINDICATION = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "vindication")
    .Position.set(2, 0)

VINDICATION.Spells.add([9452, 26016]) // 2 ranks

// Conviction - Row 2, Column 1
export const CONVICTION = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "conviction")
    .Position.set(2, 1)

CONVICTION.Spells.add([20117, 20118, 20119, 20120, 20121]) // 5 ranks

// Seal of Command - Row 2, Column 2
export const SEAL_OF_COMMAND = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "seal-of-command")
    .Position.set(2, 2)

SEAL_OF_COMMAND.Spells.add([20375]) // 1 rank

// Pursuit of Justice - Row 2, Column 3
export const PURSUIT_OF_JUSTICE = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "pursuit-of-justice")
    .Position.set(2, 3)

PURSUIT_OF_JUSTICE.Spells.add([26022, 26023]) // 2 ranks

// Row 3 (Tier 4)
// ============================================================================

// Eye for an Eye - Row 3, Column 0
export const EYE_FOR_AN_EYE = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "eye-for-an-eye")
    .Position.set(3, 0)

EYE_FOR_AN_EYE.Spells.add([9799, 25988]) // 2 ranks

// Sanctity of Battle - Row 3, Column 1
export const SANCTITY_OF_BATTLE = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "sanctity-of-battle")
    .Position.set(3, 2)

SANCTITY_OF_BATTLE.Spells.add([32043, 35396, 35397]) // 3 ranks

// Crusade - Row 3, Column 2
export const CRUSADE = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "crusade")
    .Position.set(3, 3)

CRUSADE.Spells.add([31866, 31867, 31868]) // 3 ranks

// Row 4 (Tier 5)
// ============================================================================

// Two-Handed Weapon Specialization - Row 4, Column 1
export const TWO_HANDED_WEAPON_SPECIALIZATION = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "two-handed-weapon-specialization")
    .Position.set(4, 0)

TWO_HANDED_WEAPON_SPECIALIZATION.Spells.add([20111, 20112, 20113]) // 3 ranks

// Sanctified Retribution - Row 4, Column 2
export const SANCTIFIED_RETRIBUTION = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "sanctified-retribution")
    .Position.set(4, 2)

SANCTIFIED_RETRIBUTION.Spells.add([31869, 31870]) // 2 ranks

// Row 5 (Tier 6)
// ============================================================================

// Vengeance - Row 5, Column 0
export const PALADIN_VENGEANCE = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "paladin-vengeance")
    .Position.set(5, 1)
    .Requirements.add(CONVICTION.ID, 5)

PALADIN_VENGEANCE.Spells.add([20049, 20056, 20057]) // 3 ranks

// Divine Purpose - Row 5, Column 2
export const DIVINE_PURPOSE = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "divine-purpose")
    .Position.set(5, 2)

DIVINE_PURPOSE.Spells.add([31871, 31872]) // 2 ranks

// Row 6 (Tier 7)
// ============================================================================

// The Art of War - Row 6, Column 0
export const THE_ART_OF_WAR = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "the-art-of-war")
    .Position.set(6, 0)

THE_ART_OF_WAR.Spells.add([53486, 53488]) // 2 ranks

// Repentance - Row 6, Column 1
export const REPENTANCE = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "repentance")
    .Position.set(6, 1)

REPENTANCE.Spells.add([20066]) // 1 rank

// Judgements of the Wise - Row 6, Column 2
export const JUDGEMENTS_OF_THE_WISE = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "judgements-of-the-wise")
    .Position.set(6, 2)

JUDGEMENTS_OF_THE_WISE.Spells.add([31876, 31877, 31878]) // 3 ranks

// Row 7 (Tier 8)
// ============================================================================

// Fanaticism - Row 7, Column 0
export const FANATICISM = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "fanaticism")
    .Position.set(7, 1)
    .Requirements.add(REPENTANCE.ID, 1)

FANATICISM.Spells.add([31879, 31880, 31881]) // 3 ranks

// Sanctified Wrath - Row 7, Column 2
export const SANCTIFIED_WRATH = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "sanctified-wrath")
    .Position.set(7, 2)

SANCTIFIED_WRATH.Spells.add([53375, 53376]) // 2 ranks

// Row 8 (Tier 9)
// ============================================================================

// Swift Retribution - Row 8, Column 0
export const SWIFT_RETRIBUTION = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "swift-retribution")
    .Position.set(8, 0)

SWIFT_RETRIBUTION.Spells.add([53379, 53484, 53648]) // 3 ranks

// Crusader Strike - Row 8, Column 1
export const CRUSADER_STRIKE = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "crusader-strike")
    .Position.set(8, 1)

CRUSADER_STRIKE.Spells.add([35395]) // 1 rank

// Sheath of Light - Row 8, Column 2
export const SHEATH_OF_LIGHT = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "sheath-of-light")
    .Position.set(8, 2)

SHEATH_OF_LIGHT.Spells.add([53501, 53502, 53503]) // 3 ranks

// Row 9 (Tier 10)
// ============================================================================

// Righteous Vengeance - Row 9, Column 1
export const RIGHTEOUS_VENGEANCE = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "righteous-vengeance")
    .Position.set(9, 1)

RIGHTEOUS_VENGEANCE.Spells.add([53380, 53381, 53382]) // 3 ranks

// Row 10 (Tier 11)
// ============================================================================

// Divine Storm - Row 10, Column 1
export const DIVINE_STORM = RETRIBUTION_TALENT_TREE.Talents
    .addGet("default", "divine-storm")
    .Position.set(10, 1)

DIVINE_STORM.Spells.add([53385]) // 1 rank

