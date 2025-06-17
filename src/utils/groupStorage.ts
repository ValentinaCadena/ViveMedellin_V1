const STORAGE_KEY = "joinedGroups";

export function getJoinedGroups(): string[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function joinGroup(groupName: string) {
  const current = getJoinedGroups();
  if (!current.includes(groupName)) {
    current.push(groupName);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  }
}

export function isGroupJoined(groupName: string): boolean {
  return getJoinedGroups().includes(groupName);
}
