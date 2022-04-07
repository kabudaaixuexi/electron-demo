import { type } from "os";

/** 笔记 */
export interface getNoteListReq {
    uid: string // 用户id
}
export interface addNoteReq {
    uid: string
    subtitle: string
    vNode: any
    lock: boolean
    lockValue: string | number
}
export interface editNoteReq {
    uid: string
    subtitle: string
    noteid: string
    vNode: any
    lock: boolean
    lockValue: string | number
}
export interface removeNoteReq {
    uid: string
    noteid: string
}
/** 翻译 */
type translateType = 'zh' | 'en' | 'yue' | 'wyw' | 'jp' | 'kor' | 'fra' | 'spa' | 'th' | 'ara' | 'ru' | 'pt' | 'de' | 'it' | 'el' | 'nl' | 'pl' | 'bul' | 'est' | 'dan' | 'fin' | 'cs' | 'rom' | 'slo' | 'swe' | 'hu' | 'cht' | 'vie' | 'jav' | 'zul' | 'zaz' | 'frm'
export interface getTranslateReq {
    content: string,
    from: translateType,
    to: translateType
}
export const langs =  {
    中文: "zh",
    英语: "en",
    粤语: "yue",
    文言文: "wyw",
    日语: "jp",
    韩语: "kor",
    法语: "fra",
    西班牙语: "spa",
    泰语: "th",
    阿拉伯语: "ara",
    俄语: "ru",
    葡萄牙语: "pt",
    德语: "de",
    意大利语: "it",
    希腊语: "el",
    荷兰语: "nl",
    波兰语: "pl",
    保加利亚语: "bul",
    爱沙尼亚语: "est",
    丹麦语: "dan",
    芬兰语: "fin",
    捷克语: "cs",
    罗马尼亚语: "rom",
    斯洛文尼亚语: "slo",
    瑞典语: "swe",
    匈牙利语: "hu",
    繁体中文: "cht",
    越南语: "vie",

    爪哇语: "jav",
    祖鲁语: "zul",
    扎扎其语: "zaz",
    中古法语: "frm",
    // "Haitian Creole": "ht",
    // Hausa: "ha",
    // Hawaiian: "haw",
    // Hebrew: "iw",
    // Hindi: "hi",
    // Hmong: "hmn",
    // Hungarian: "hu",
    // Icelandic: "is",
    // Igbo: "ig",
    // Indonesian: "id",
    // Irish: "ga",
    // Italian: "it",
    // Japanese: "ja",
    // Javanese: "jw",
    // Kannada: "kn",
    // Kazakh: "kk",
    // Khmer: "km",
    // Korean: "ko",
    // "Kurdish (Kurmanji)": "ku",
    // Kyrgyz: "ky",
    // Lao: "lo",
    // Latin: "la",
    // Latvian: "lv",
    // Lithuanian: "lt",
    // Luxembourgish: "lb",
    // Macedonian: "mk",
    // Malagasy: "mg",
    // Malay: "ms",
    // Malayalam: "ml",
    // Maltese: "mt",
    // Maori: "mi",
    // Marathi: "mr",
    // Mongolian: "mn",
    // "Myanmar (Burmese)": "my",
    // Nepali: "ne",
    // Norwegian: "no",
    // Pashto: "ps",
    // Persian: "fa",
    // Polish: "pl",
    // Portuguese: "pt",
    // Punjabi: "pa",
    // Romanian: "ro",
    // Russian: "ru",
    // Samoan: "sm",
    // "Scots Gaelic": "gd",
    // Serbian: "sr",
    // Sesotho: "st",
    // Shona: "sn",
    // Sindhi: "sd",
    // Sinhala: "si",
    // Slovak: "sk",
    // Slovenian: "sl",
    // Somali: "so",
    // Spanish: "es",
    // Sundanese: "su",
    // Swahili: "sw",
    // Swedish: "sv",
    // Tajik: "tg",
    // Tamil: "ta",
    // Telugu: "te",
    // Thai: "th",
    // Turkish: "tr",
    // Ukrainian: "uk",
    // Urdu: "ur",
    // Uyghur: "ug",
    // Uzbek: "uz",
    // Vietnamese: "vi",
    // Welsh: "cy",
    // Xhosa: "xh",
    // Yiddish: "yi",
    // Yoruba: "yo",
    // Zulu: "zu"
  };
  /** 合成语音 */
  // 度小宇=1，度小美=0，度逍遥（基础）=3，度丫丫=4
  type Per = 0 | 1 | 3 | 4
  export interface getVoiceReq {
      tex: string,
      lan: string,
      cuid: string,
      spd?: number,
      pit?: number,
      vol?: number,
      ctp: number,
      tok: string,
      per?: Per
  }