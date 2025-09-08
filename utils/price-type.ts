
export const HEADER_MAP: Record<string, string> = {
  'skupina dřevin': 'group',
  'druh dřeviny': 'type',
  '25 cm: syp': 'loose25',
  '25 cm: skl': 'laminated25',
  '33 cm: skl': 'laminated33',
  '33 cm: syp': 'loose33',
  '50 cm: skl': 'laminated50',
  '50 cm: syp': 'loose50',
  '100 cm': 'laminated100',
}


export type Wood = {
  group: string,
  type: string,
  loose25: string,
  laminated25: string,
  loose33: string,
  laminated33: string,
  loose50: string,
  laminated50: string,
  laminated100: string
}