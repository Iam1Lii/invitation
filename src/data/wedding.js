// All wedding details live here. Edit, then rebuild.
export const wedding = {
  groom: { km: 'ធាវ ប៊ុនធួង', en: 'BunThoung', parents: ['លោក ធាវ ធា', 'លោកស្រី ទេស ចាន់ធី'] },
  bride: { km: 'ជូ ម៉េងសៀវ', en: 'MengSeav', parents: ['លោក តេង ជៀស', 'លោកស្រី កោ សុជឹង'] },
  // Cambodia time (UTC+7). Used by the countdown.
  dateISO: '2027-01-10T16:00:00+07:00',
  // No lunar date: it was not on the printed card.
  venue: { km: 'គេហដ្ឋានខាងស្រី ភូមិវាល ឃុំសានគរ ស្រុកកំពង់ស្វាយ ខេត្តកំពង់ធំ' },
  mapsUrl: 'https://maps.app.goo.gl/cQzydyf96Uf8Dmsr6?g_st=ic',
  programme: [
    ['៤:៣០ ព្រឹក', 'ពិធីសែនក្រុងពាលី'],
    ['៦:៣០ ព្រឹក', 'ជួបជុំភ្ញៀវកិត្តិយស ដើម្បីរៀបចំហែជំនូន'],
    ['៧:០៥ ព្រឹក', 'ពិធីហែជំនូន កំណត់ចូលរោងជ័យ'],
    ['៨:៣០ ព្រឹក', 'ពិធីសូត្រមន្តចំរើនព្រះបរិត្ត'],
    ['១០:៣០ ព្រឹក', 'ពិធីកាត់សក់ បង្កក់សិរីកូនប្រុស កូនស្រី'],
    ['១១:៣០ ថ្ងៃត្រង់', 'អញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារថ្ងៃត្រង់'],
    ['៤:៣០ ល្ងាច', 'អញ្ជើញភ្ញៀវកិត្តិយសពិសាភោជនាហារ'],
  ],
};
// NOTE: the page markup in index.html still holds the Khmer text directly.
// Only dateISO and mapsUrl are wired into the code so far.
