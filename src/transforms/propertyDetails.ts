import type { PropertyI, Unit } from "../types";

const detailsPriority: (keyof Unit)[] = ["bedrooms", "bathrooms", "surface"];
const detailUnits: Partial<Record<keyof Unit, string>> = {
  bedrooms: "BD",
  bathrooms: "BA",
  surface: "SF",
};

export const buildDetailsString = (property: PropertyI) => {
  const details = [];

  for (const detail of detailsPriority) {
    if (property.unit[detail] !== undefined && property.unit[detail] !== null) {
      const detailUnit = detailUnits[detail];

      if (!detailUnit) {
        details.push(property.unit[detail]);
      } else {
        details.push(`${property.unit[detail]} ${detailUnit}`);
      }
    }
  }

  return details.join(", ");
};
