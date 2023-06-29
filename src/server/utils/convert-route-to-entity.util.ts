const mapping: Record<string, string> = {
  appointments: 'appointment',
  clinics: 'clinic',
  doctors: 'doctor',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
