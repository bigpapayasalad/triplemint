import type { PropertyI, Unit } from "../types";

const detailsPriority: (keyof Unit)[] = ["bedrooms", "bathrooms", "surface"];
const detailUnits: Partial<Record<keyof Unit, string>> = {
  bedrooms: "bed",
  bathrooms: "bath",
  surface: "sqft",
};

export const buildDetailsString = (property: PropertyI) => {
  let isStudio = false;
  const humanizedDetails = [];

  for (const detail of detailsPriority) {
    const value = property.unit[detail];
    if (property.unit[detail] !== undefined && value !== null) {
      if (isStudio && detail === "bathrooms" && value === 1) {
        continue;
      }

      const detailUnit = detailUnits[detail];
      let humanized: string;

      if (detail === "bedrooms" && value === 0) {
        isStudio = true;
        humanized = "Studio";
      } else if (detailUnit) {
        humanized = `${value} ${detailUnit}`;
      } else {
        humanized = `${value}`;
      }

      humanizedDetails.push(humanized);
    }
  }

  return humanizedDetails.join(", ");
};
