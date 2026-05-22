const labelMap: Record<string, string> = {
  "/": "Add items to your shopping list",
  "/notes": "Create a new note group",
  "/private": "Add a new private post",
};

export const generateFooterFormPlaceholder = (route: string): string => {
  return labelMap[route] ?? "Add something";
};
