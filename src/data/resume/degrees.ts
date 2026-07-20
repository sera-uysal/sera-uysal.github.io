export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
  grade?: string;
  thesis?: string;
  supervisor?: string;
  supervisorLink?: string;
}

const degrees: Degree[] = [
  {
    school: 'Ludwig-Maximilians-Universität München (LMU Munich), Munich, Germany',
    degree: 'M.Sc. Economics',
    link: 'https://lmu.de',
    year: 2024,
    grade: '1.6 (Thesis Grade: 1.3)',
    thesis: 'Profit Shifting by Multinational Firms through Intangible Assets: The Role of Patent Boxes',
    supervisor: 'Prof. Dr. Andreas Haufler',
    supervisorLink: 'https://www.econ.lmu.de/de/personen/kontaktseite/andreas-haufler-4ee6c4e1.html',
  },
  {
    school: 'Middle East Technical University (METU), Ankara, Türkiye',
    degree: 'B.Sc. Economics',
    link: 'https://metu.edu.tr',
    year: 2015,
    grade: '3.23 / 4.00 (Honours)',
  }
];

export default degrees;
