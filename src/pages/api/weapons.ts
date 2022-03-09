// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type ItemStatModifier = {
  modifier?: "+" | "-";
  value: string | number;
  unit: "flatRange" | "percent" | "flat";
  type:
    | "physicalDmg"
    | "electricalDmg"
    | "thermalDmg"
    | "staminaCostReduction"
    | "crtChance"
    | "crtDmg"
    | "bleedChance";
};

type Weapons = {
  name: string;
  rarity: "legendary" | "rare" | "uncommon";
  iconic: boolean;
  dps: number;
  dmg: number;
  atkPerSecond: number;
  weaponType: "power" | "blade" | "blunt";
  attributes: Array<ItemStatModifier>;
  mods: [ItemStatModifier?, ItemStatModifier?, ItemStatModifier?];
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Weapons>
) {
  res.status(200).json([
    {
      name: "Satori",
      rarity: "legendary",
      iconic: true,
      dps: 822.8,
      dmg: 293,
      atkPerSecond: 2.81,
      weaponType: "blade",
      attributes: [
        {
          modifier: "+",
          value: "196-240",
          unit: "flatRange",
          type: "physicalDmg",
        },
        {
          modifier: "-",
          value: "14.81",
          unit: "flat",
          type: "staminaCostReduction",
        },
        {
          modifier: "+",
          value: "7%",
          unit: "percent",
          type: "crtChance",
        },
        {
          modifier: "+",
          value: "526%",
          unit: "percent",
          type: "crtDmg",
        },
        {
          modifier: "+",
          value: "20%",
          unit: "percent",
          type: "bleedChance",
        },
      ],
      mods: [
        {
          modifier: "+",
          value: "1.5",
          unit: "flat",
          type: "physicalDmg",
        },
      ],
    },
  ]);
}
