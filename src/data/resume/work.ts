/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Ministry of Treasury and Finance of Türkiye',
    position: 'Treasury Associate',
    url: 'https://en.hmb.gov.tr',
    startDate: '2018-06-01',
    endDate: '2022-09-01',
    summary:
      'Delivered decision-ready briefs and analytical reports on G20/IMF topics by synthesizing complex inputs from multiple institutions under tight deadlines.',
    highlights: [
      'Coordinated IMF Article IV and Financial Sector Assessment Program (FSAP) cycles end-to-end.',
      'Organized data requests and inter-institutional meetings, and reported outcomes to senior management.',
      'Reviewed comprehensive IMF draft reports and negotiated institutional positions directly with the IMF.',
      'Served as a delegation member in high-level G20, IMF, and World Bank meetings.',
      'Authored an internal research thesis on digital currencies, CBDCs, crypto assets, and stablecoins.',
    ],
  },
  {
    name: 'Coca-Cola CCI',
    position: 'Operational Finance Analyst',
    url: 'https://www.cci.com.tr/en',
    startDate: '2016-05-01',
    endDate: '2017-12-01',
    summary:
      'Managed operational finance, contracts, and promotions, acting as the direct finance contact for the sales team.',
    highlights: [
      'Served as the coordination point between sales and finance during new business contracts and sales operations.',
      'Took on four sales regions within six months due to strong performance.',
      'Configured price and campaign changes in-system and maintained control over customer and dealer contracts.',
      'Managed a call-center project balancing customer satisfaction with risk control.',
      'Managed regular warehouse inventory counts and controls, ensuring balance-sheet accuracy.',
    ],
  },
  {
    name: 'Deloitte Türkiye',
    position: 'Intern',
    url: 'https://www2.deloitte.com/tr',
    startDate: '2016-01-01',
    endDate: '2016-04-01',
    summary:
      'Supported external audit engagements by preparing working papers and verifying financial records.',
  },
];

export default work;
