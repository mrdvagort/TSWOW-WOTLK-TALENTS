import { std } from "wow/wotlk"

// ============================================================================
// Discipline Priest Talent Tree - Original Tree
// TalentTab ID: 201
// ============================================================================

// Get the Priest class
const PRIEST_CLASS = std.Classes.load("PRIEST")

// Get the Discipline talent tree (index 0)
export const DISCIPLINE_TALENT_TREE = PRIEST_CLASS.TalentTrees.get()[0]

// Delete all existing talents from the Discipline tree
const existingTalents = DISCIPLINE_TALENT_TREE.Talents.get()
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

// Unbreakable Will - Row 0, Column 1
export const UNBREAKABLE_WILL = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "unbreakable-will")
    .Position.set(0, 1)

UNBREAKABLE_WILL.Spells.add([14522, 14788, 14789, 14790, 14791]) // 5 ranks

// Twin Disciplines - Row 0, Column 2
export const TWIN_DISCIPLINES = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "twin-disciplines")
    .Position.set(0, 2)

TWIN_DISCIPLINES.Spells.add([47586, 47587, 47588, 52802, 52803]) // 5 ranks


// Row 1 (Tier 2)
// ============================================================================

// Silent Resolve - Row 1, Column 0
export const SILENT_RESOLVE = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "silent-resolve")
    .Position.set(1, 0)

SILENT_RESOLVE.Spells.add([14523, 14784, 14785]) // 3 ranks

// Improved Inner Fire - Row 1, Column 1
export const IMPROVED_INNER_FIRE = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "improved-inner-fire")
    .Position.set(1, 1)

IMPROVED_INNER_FIRE.Spells.add([14747, 14770, 14771]) // 3 ranks

// Improved Power Word: Fortitude - Row 1, Column 2
export const IMPROVED_POWER_WORD_FORTITUDE = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "improved-power-word-fortitude")
    .Position.set(1, 2)

IMPROVED_POWER_WORD_FORTITUDE.Spells.add([14749, 14767]) // 2 ranks

// Martyrdom - Row 1, Column 3
export const MARTYRDOM = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "martyrdom")
    .Position.set(1, 3)

MARTYRDOM.Spells.add([14531, 14774]) // 2 ranks


// Row 2 (Tier 3)
// ============================================================================

// Meditation - Row 2, Column 0
export const MEDITATION = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "meditation")
    .Position.set(2, 0)

MEDITATION.Spells.add([14521, 14776, 14777]) // 3 ranks

// Inner Focus - Row 2, Column 1
export const INNER_FOCUS = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "inner-focus")
    .Position.set(2, 1)

INNER_FOCUS.Spells.add([14751]) // 1 rank

// Improved Power Word: Shield - Row 2, Column 2
export const IMPROVED_POWER_WORD_SHIELD = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "improved-power-word-shield")
    .Position.set(2, 2)

IMPROVED_POWER_WORD_SHIELD.Spells.add([14748, 14768, 14769]) // 3 ranks


// Row 3 (Tier 4)
// ============================================================================

// Absolution - Row 3, Column 0
export const ABSOLUTION = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "absolution")
    .Position.set(3, 0)

ABSOLUTION.Spells.add([33167, 33171, 33172]) // 3 ranks

// Mental Agility - Row 3, Column 1
export const MENTAL_AGILITY = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "mental-agility")
    .Position.set(3, 1)

MENTAL_AGILITY.Spells.add([14520, 14780, 14781]) // 3 ranks

// Improved Mana Burn - Row 3, Column 3
export const IMPROVED_MANA_BURN = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "improved-mana-burn")
    .Position.set(3, 3)

IMPROVED_MANA_BURN.Spells.add([14750, 14772]) // 2 ranks


// Row 4 (Tier 5)
// ============================================================================

// Reflective Shield - Row 4, Column 0
export const REFLECTIVE_SHIELD = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "reflective-shield")
    .Position.set(4, 0)

REFLECTIVE_SHIELD.Spells.add([33201, 33202]) // 2 ranks

// Mental Strength - Row 4, Column 1
export const MENTAL_STRENGTH = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "mental-strength")
    .Position.set(4, 1)

MENTAL_STRENGTH.Spells.add([18551, 18552, 18553, 18554, 18555]) // 5 ranks

// Soul Warding - Row 4, Column 2
export const SOUL_WARDING = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "soul-warding")
    .Position.set(4, 2)
    .Requirements.add(IMPROVED_POWER_WORD_SHIELD.ID, 3)

SOUL_WARDING.Spells.add([63574]) // 1 rank


// Row 5 (Tier 6)
// ============================================================================

// Focused Power - Row 5, Column 0
export const FOCUSED_POWER = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "focused-power")
    .Position.set(5, 0)

FOCUSED_POWER.Spells.add([33186, 33190]) // 2 ranks

// Enlightenment - Row 5, Column 2
export const ENLIGHTENMENT = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "enlightenment")
    .Position.set(5, 2)

ENLIGHTENMENT.Spells.add([34908, 34909, 34910]) // 3 ranks


// Row 6 (Tier 7)
// ============================================================================

// Focused Will - Row 6, Column 0
export const FOCUSED_WILL = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "focused-will")
    .Position.set(6, 0)

FOCUSED_WILL.Spells.add([45234, 45243, 45244]) // 3 ranks

// Power Infusion - Row 6, Column 1
export const POWER_INFUSION = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "power-infusion")
    .Position.set(6, 1)
    .Requirements.add(MENTAL_STRENGTH.ID, 5)

POWER_INFUSION.Spells.add([10060]) // 1 rank

// Improved Flash Heal - Row 6, Column 2
export const IMPROVED_FLASH_HEAL = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "improved-flash-heal")
    .Position.set(6, 2)

IMPROVED_FLASH_HEAL.Spells.add([63504, 63505, 63506]) // 3 ranks


// Row 7 (Tier 8)
// ============================================================================

// Renewed Hope - Row 7, Column 0
export const RENEWED_HOPE = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "renewed-hope")
    .Position.set(7, 0)

RENEWED_HOPE.Spells.add([57470, 57472]) // 2 ranks

// Rapture - Row 7, Column 1
export const RAPTURE = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "rapture")
    .Position.set(7, 1)

RAPTURE.Spells.add([47535, 47536, 47537]) // 3 ranks

// Aspiration - Row 7, Column 2
export const ASPIRATION = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "aspiration")
    .Position.set(7, 2)

ASPIRATION.Spells.add([47507, 47508]) // 2 ranks


// Row 8 (Tier 9)
// ============================================================================

// Divine Aegis - Row 8, Column 0
export const DIVINE_AEGIS = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "divine-aegis")
    .Position.set(8, 0)

DIVINE_AEGIS.Spells.add([47509, 47511, 47515]) // 3 ranks

// Pain Suppression - Row 8, Column 1
export const PAIN_SUPPRESSION = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "pain-suppression")
    .Position.set(8, 1)

PAIN_SUPPRESSION.Spells.add([33206]) // 1 rank

// Grace - Row 8, Column 2
export const GRACE = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "grace")
    .Position.set(8, 2)

GRACE.Spells.add([47516, 47517]) // 2 ranks


// Row 9 (Tier 10)
// ============================================================================

// Borrowed Time - Row 9, Column 1
export const BORROWED_TIME = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "borrowed-time")
    .Position.set(9, 1)

BORROWED_TIME.Spells.add([52795, 52797, 52798, 52799, 52800]) // 5 ranks


// Row 10 (Tier 11)
// ============================================================================

// Penance - Row 10, Column 1
export const PENANCE = DISCIPLINE_TALENT_TREE.Talents
    .addGet("default", "penance")
    .Position.set(10, 1)

PENANCE.Spells.add([47540]) // 1 rank