export type RSVPAttendance = "yes" | "no";

export interface RSVPPayload {
  name: string;
  phone: string;
  email: string;
  attendance: RSVPAttendance;
  message: string;
}
