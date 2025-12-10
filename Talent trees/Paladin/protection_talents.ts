import { std } from "wow/wotlk"

// ============================================================================
// Protection Paladin Talent Tree - Original Tree
// TalentTab ID: 382
// ============================================================================

// Get the Paladin class
const PALADIN_CLASS = std.Classes.load("PALADIN")

// Get the original Protection talent tree (index 1)
 const PROTECTION_TALENT_TREE = PALADIN_CLASS.TalentTrees.get()[1]

// Delete all existing talents from the Protection tree
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

// Divinity - Row 0, Column 0
 const DIVINITY = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "divinity")
    .Position.set(0, 1)

DIVINITY.Spells.add([63646, 63647, 63648, 63649, 63650]) // 5 ranks

// Divine Strength - Row 0, Column 2
 const DIVINE_STRENGTH = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "divine-strength")
    .Position.set(0, 2)

DIVINE_STRENGTH.Spells.add([20261, 20262, 20263, 20264, 20265]) // 5 ranks

// Row 1 (Tier 2)
// ============================================================================

// Stoicism - Row 1, Column 0
 const STOICISM = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "stoicism")
    .Position.set(1, 0)

STOICISM.Spells.add([31844, 31845, 53519]) // 3 ranks

// Guardian's Favor - Row 1, Column 1
 const GUARDIANS_FAVOR = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "guardians-favor")
    .Position.set(1, 1)

GUARDIANS_FAVOR.Spells.add([20174, 20175]) // 2 ranks

//  - Row 1, Column 2
 const PROTECTION_ANTICIPATION = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "protection-anticipation")
    .Position.set(1, 2)

PROTECTION_ANTICIPATION.Spells.add([20096, 20097, 20098, 20099, 20100]) // 5 ranks

// Row 2 (Tier 3)
// ============================================================================

// Divine Sacrifice - Row 2, Column 0
 const DIVINE_SACRIFICE = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "divine-sacrifice")
    .Position.set(2, 0)

DIVINE_SACRIFICE.Spells.add([64205]) // 1 rank

// Improved Righteous Fury - Row 2, Column 1
 const IMPROVED_RIGHTEOUS_FURY = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "improved-righteous-fury")
    .Position.set(2, 1)

IMPROVED_RIGHTEOUS_FURY.Spells.add([20468, 20469, 20470]) // 3 ranks

// Toughness - Row 2, Column 2
 const PROTECTION_TOUGHNESS = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "protection-toughness")
    .Position.set(2, 2)

PROTECTION_TOUGHNESS.Spells.add([12299, 12761, 12762, 12763, 12764]) // 5 ranks

// Row 3 (Tier 4)
// ============================================================================

// Divine Guardian - Row 3, Column 0
 const DIVINE_GUARDIAN = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "divine-guardian")
    .Position.set(3, 0)
    .Requirements.add(DIVINE_SACRIFICE.ID, 1)

DIVINE_GUARDIAN.Spells.add([53527, 53530]) // 2 ranks

// Improved Hammer of Justice - Row 3, Column 1
 const IMPROVED_HAMMER_OF_JUSTICE = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "improved-hammer-of-justice")
    .Position.set(3, 1)

IMPROVED_HAMMER_OF_JUSTICE.Spells.add([20487, 20488]) // 3 ranks

// Improved Devotion Aura - Row 3, Column 2
 const IMPROVED_DEVOTION_AURA = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "improved-devotion-aura")
    .Position.set(3, 2)

IMPROVED_DEVOTION_AURA.Spells.add([20254, 20255, 20256]) // 3 ranks

// Row 4 (Tier 5)
// ============================================================================

// Blessing of Sanctuary - Row 4, Column 0
 const BLESSING_OF_SANCTUARY = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "blessing-of-sanctuary")
    .Position.set(4, 1)

BLESSING_OF_SANCTUARY.Spells.add([20911]) // 1 rank

// Reckoning - Row 4, Column 2
 const RECKONING = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "reckoning")
    .Position.set(4, 2)

RECKONING.Spells.add([20177, 20179, 20181, 20180, 20182]) // 5 ranks

// Row 5 (Tier 6)
// ============================================================================

// Sacred Duty - Row 5, Column 0
 const SACRED_DUTY = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "sacred-duty")
    .Position.set(5, 0)

SACRED_DUTY.Spells.add([31848, 31849]) // 2 ranks

// One-Handed Weapon Specialization - Row 5, Column 2
 const ONE_HANDED_WEAPON_SPECIALIZATION = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "one-handed-weapon-specialization")
    .Position.set(5, 2)

ONE_HANDED_WEAPON_SPECIALIZATION.Spells.add([20196, 20197, 20198]) // 3 ranks

// Row 6 (Tier 7)
// ============================================================================

// Spiritual Attunement - Row 6, Column 0
 const SPIRITUAL_ATTUNEMENT = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "spiritual-attunement")
    .Position.set(6, 0)

SPIRITUAL_ATTUNEMENT.Spells.add([31785, 33776]) // 2 ranks

// Holy Shield - Row 6, Column 1
 const HOLY_SHIELD = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "holy-shield")
    .Position.set(6, 1)
    .Requirements.add(BLESSING_OF_SANCTUARY.ID, 1)

HOLY_SHIELD.Spells.add([20925]) // 1 rank

// Ardent Defender - Row 6, Column 2
 const ARDENT_DEFENDER = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "ardent-defender")
    .Position.set(6, 2)

ARDENT_DEFENDER.Spells.add([31850, 31851, 31852]) // 3 ranks

// Row 7 (Tier 8)
// ============================================================================

// Redoubt - Row 7, Column 0
 const REDOUBT = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "redoubt")
    .Position.set(7, 0)

REDOUBT.Spells.add([20127, 20130, 20135]) // 3 ranks

// Combat Expertise - Row 7, Column 2
 const COMBAT_EXPERTISE = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "combat-expertise")
    .Position.set(7, 2)

COMBAT_EXPERTISE.Spells.add([31858, 31859, 31860]) // 3 rank

// Row 8 (Tier 9)
// ============================================================================

// Touched by the Light - Row 8, Column 0
 const TOUCHED_BY_THE_LIGHT = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "touched-by-the-light")
    .Position.set(8, 0)

TOUCHED_BY_THE_LIGHT.Spells.add([53590, 53591, 53592]) // 3 ranks

// Avenger's Shield - Row 8, Column 1
 const AVENGERS_SHIELD = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "avengers-shield")
    .Position.set(8, 1)
    .Requirements.add(HOLY_SHIELD.ID, 1)

AVENGERS_SHIELD.Spells.add([31935]) // 1 rank

// Guarded by the Light - Row 8, Column 2
 const GUARDED_BY_THE_LIGHT = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "guarded-by-the-light")
    .Position.set(8, 2)

GUARDED_BY_THE_LIGHT.Spells.add([53583, 53585]) // 2 ranks

// Row 9 (Tier 10)
// ============================================================================

// Shield of the Templar - Row 9, Column 0
 const SHIELD_OF_THE_TEMPLAR = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "shield-of-the-templar")
    .Position.set(9, 1)
    .Requirements.add(AVENGERS_SHIELD.ID, 1)

SHIELD_OF_THE_TEMPLAR.Spells.add([53709, 53710, 53711]) // 3 ranks

// Judgements of the Just - Row 9, Column 2
 const JUDGEMENTS_OF_THE_JUST = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "judgements-of-the-just")
    .Position.set(9, 2)

JUDGEMENTS_OF_THE_JUST.Spells.add([53695, 53696]) // 2 ranks

// Row 10 (Tier 11)
// ============================================================================

// Hammer of the Righteous - Row 10, Column 1
 const HAMMER_OF_THE_RIGHTEOUS = PROTECTION_TALENT_TREE.Talents
    .addGet("default", "hammer-of-the-righteous")
    .Position.set(10, 1)

HAMMER_OF_THE_RIGHTEOUS.Spells.add([53595]) // 1 rank




// Stoicism
// Sacred Duty