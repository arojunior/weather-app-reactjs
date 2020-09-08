export const takeFirst = (list: any[]) => list[0];

export const toRounded = (n: number) => Math.round(n);

export const toCelcius = (temperature: number) => toRounded(temperature) - 273;

export const toDate = (dt: number) => new Date(dt * 1000);

export const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
