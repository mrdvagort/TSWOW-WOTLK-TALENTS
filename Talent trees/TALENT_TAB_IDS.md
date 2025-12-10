# Talent Tab IDs Reference

Use these IDs in `Printer.ts` to extract talent information for each spec.

## Warrior
- **Arms**: 161 → `Warrior/arms_talents.ts`
- **Fury**: 163 → `Warrior/fury_talents.ts`
- **Protection**: 164 → `Warrior/protection_talents.ts`

## Paladin
- **Holy**: 381 → `Paladin/holy_talents.ts`
- **Protection**: 382 → `Paladin/protection_talents.ts`
- **Retribution**: 383 → `Paladin/retribution_talents.ts`

## Hunter
- **Beast Mastery**: 361 → `Hunter/BeastMastery.ts`
- **Marksmanship**: 363 → `Hunter/Marksmanship.ts`
- **Survival**: 362 → `Hunter/Survival.ts`

## Rogue
- **Assassination**: 181 → `Rogue/Assassination.ts`
- **Combat**: 182 → `Rogue/Combat.ts`
- **Subtlety**: 183 → `Rogue/Subtlety.ts`

## Priest
- **Discipline**: 201 → `Priest/Discipline.ts`
- **Holy**: 202 → `Priest/Holy.ts`
- **Shadow**: 203 → `Priest/Shadow.ts`

## Shaman
- **Elemental**: 261 → `Shaman/Elemental.ts`
- **Enhancement**: 263 → `Shaman/Enhancement.ts`
- **Restoration**: 262 → `Shaman/Restoration.ts`

## Mage
- **Arcane**: 81 → `Mage/Arcane.ts`
- **Fire**: 41 → `Mage/Fire.ts`
- **Frost**: 61 → `Mage/Frost.ts`

## Warlock
- **Affliction**: 302 → `Warlock/Affliction.ts`
- **Demonology**: 303 → `Warlock/Demonology.ts`
- **Destruction**: 301 → `Warlock/Destruction.ts`

## Druid
- **Balance**: 283 → `Druid/Balance.ts`
- **Feral Combat**: 281 → `Druid/FeralCombat.ts`
- **Restoration**: 282 → `Druid/Restoration.ts`

---

## Usage Workflow

1. Open `Printer.ts`
2. Set `TAB_ID_TO_PRINT` to the desired tab ID from above
3. Run `build data` in TSWoW shell
4. Copy the console output
5. Open the corresponding spec file
6. Paste below the `// PASTE PRINTER OUTPUT BELOW THIS LINE` comment
7. Repeat for all specs you need

