/*! ePOS-Print Editor Version 5.0.5 Copyright (C) SEIKO EPSON CORPORATION 2012. All rights reserved. */

// Model Information
var modelinfo = {
    tm_t88_80: {
        width: 512,
        linespc: 30,
        ank: { font_a: 24, font_b: 18, font_c: 0, font_d: 0, font_e: 0, special_a: 24, special_b: 18 },
        kanji: { font_a: 24, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 512, ini_h: 831, max_w: 512, max_h: 1662 }
    },
    tm_t88_58: {
        width: 360,
        linespc: 30,
        ank: { font_a: 24, font_b: 18, font_c: 0, font_d: 0, font_e: 0, special_a: 24, special_b: 18 },
        kanji: { font_a: 24, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 360, ini_h: 831, max_w: 360, max_h: 1662 }
    },
    tm_t70_80: {
        width: 512,
        linespc: 30,
        ank: { font_a: 24, font_b: 18, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        kanji: { font_a: 24, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 512, ini_h: 1662, max_w: 512, max_h: 1662 }
    },
    tm_t90_80: {
        width: 512,
        linespc: 30,
        ank: { font_a: 24, font_b: 18, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        kanji: { font_a: 24, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 512, ini_h: 1662, max_w: 512, max_h: 1662 }
    },
    tm_t90_60: {
        width: 384,
        linespc: 30,
        ank: { font_a: 24, font_b: 18, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        kanji: { font_a: 24, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 384, ini_h: 1662, max_w: 384, max_h: 1662 }
    },
    tm_t90_58: {
        width: 360,
        linespc: 30,
        ank: { font_a: 24, font_b: 18, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        kanji: { font_a: 24, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 360, ini_h: 1662, max_w: 360, max_h: 1662 }
    },
    tm_l90_re: {
        width: 576,
        linespc: 30,
        ank: { font_a: 24, font_b: 18, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        kanji: { font_a: 24, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 576, ini_h: 1476, max_w: 576, max_h: 1476 }
    },
    tm_l90_la: {
        width: 560,
        linespc: 30,
        ank: { font_a: 24, font_b: 18, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        kanji: { font_a: 24, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 560, ini_h: 1476, max_w: 560, max_h: 1476 }
    },
    tm_p60_60: {
        width: 432,
        linespc: 30,
        ank: { font_a: 24, font_b: 20, font_c: 16, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        kanji: { font_a: 24, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 432, ini_h: 1624, max_w: 432, max_h: 1624 }
    },
    tm_p60_58: {
        width: 420,
        linespc: 30,
        ank: { font_a: 24, font_b: 20, font_c: 16, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        kanji: { font_a: 24, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 420, ini_h: 1624, max_w: 420, max_h: 1624 }
    },
    tm_p60_la: {
        width: 400,
        linespc: 30,
        ank: { font_a: 24, font_b: 20, font_c: 16, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        kanji: { font_a: 24, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 400, ini_h: 1624, max_w: 400, max_h: 1624 }
    },
    tm_u22_76: {
        width: 200,
        linespc: 12,
        ank: { font_a: 12, font_b: 10, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        kanji: { font_a: 9, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 200, ini_h: 1, max_w: 200, max_h: 1 }
    },
    tm_u22_70: {
        width: 180,
        linespc: 12,
        ank: { font_a: 12, font_b: 10, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        kanji: { font_a: 9, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 180, ini_h: 1, max_w: 180, max_h: 1 }
    },
    tm_u22_58: {
        width: 150,
        linespc: 12,
        ank: { font_a: 12, font_b: 10, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        kanji: { font_a: 9, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 150, ini_h: 1, max_w: 150, max_h: 1 }
    },
    tm_t20_80: {
        width: 576,
        linespc: 30,
        ank: { font_a: 24, font_b: 18, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        kanji: { font_a: 24, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 576, ini_h: 831, max_w: 576, max_h: 1662 }
    },
    tm_t20_58: {
        width: 420,
        linespc: 30,
        ank: { font_a: 24, font_b: 18, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        kanji: { font_a: 24, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 420, ini_h: 831, max_w: 420, max_h: 1662 }
    },
    tm_t70_m8: {
        width: 576,
        linespc: 30,
        ank: { font_a: 24, font_b: 18, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        kanji: { font_a: 24, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 576, ini_h: 1662, max_w: 576, max_h: 1662 }
    },
    tm_t70_m5: {
        width: 416,
        linespc: 30,
        ank: { font_a: 24, font_b: 18, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        kanji: { font_a: 24, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 416, ini_h: 1662, max_w: 416, max_h: 1662 }
    },
    tm_t83_80: {
        width: 512,
        linespc: 30,
        ank: { font_a: 24, font_b: 18, font_c: 0, font_d: 0, font_e: 0, special_a: 24, special_b: 18 },
        kanji: { font_a: 24, font_b: 16, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 512, ini_h: 831, max_w: 512, max_h: 1662 }
    },
    tm_t83_58: {
        width: 360,
        linespc: 30,
        ank: { font_a: 24, font_b: 18, font_c: 0, font_d: 0, font_e: 0, special_a: 24, special_b: 18 },
        kanji: { font_a: 24, font_b: 16, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 360, ini_h: 831, max_w: 360, max_h: 1662 }
    },
    tm_p80_48: {
        width: 576,
        linespc: 30,
        ank: { font_a: 24, font_b: 18, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        kanji: { font_a: 24, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 576, ini_h: 1662, max_w: 576, max_h: 1662 }
    },
    tm_p80_42: {
        width: 546,
        linespc: 30,
        ank: { font_a: 26, font_b: 18, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        kanji: { font_a: 26, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 546, ini_h: 831, max_w: 546, max_h: 1662 }
    },
    tm_p20_58: {
        width: 384,
        linespc: 30,
        ank: { font_a: 24, font_b: 18, font_c: 18, font_d: 20, font_e: 16, special_a: 24, special_b: 18 },
        kanji: { font_a: 24, font_b: 20, font_c: 16, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 384, ini_h: 2400, max_w: 384, max_h: 2400 }
    },
    tm_h60_re: {
        width: 512,
        linespc: 30,
        ank: { font_a: 24, font_b: 18, font_c: 0, font_d: 0, font_e: 0, special_a: 24, special_b: 18 },
        kanji: { font_a: 24, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 512, ini_h: 831, max_w: 512, max_h: 1662 }
    },
    tm_u33_76: {
        width: 450,
        linespc: 30,
        ank: { font_a: 24, font_b: 18, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        kanji: { font_a: 24, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 450, ini_h: 1, max_w: 450, max_h: 1 }
    },
    tm_u33_70: {
        width: 405,
        linespc: 30,
        ank: { font_a: 24, font_b: 18, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        kanji: { font_a: 24, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 405, ini_h: 1, max_w: 405, max_h: 1 }
    },
    tm_u33_58: {
        width: 337,
        linespc: 30,
        ank: { font_a: 24, font_b: 18, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        kanji: { font_a: 24, font_b: 0, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 337, ini_h: 1, max_w: 337, max_h: 1 }
    },
    tm_m10_58: {
        width: 420,
        linespc: 30,
        ank: { font_a: 24, font_b: 20, font_c: 18, font_d: 0, font_e: 0, special_a: 24, special_b: 18 },
        kanji: { font_a: 24, font_b: 20, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 420, ini_h: 2400, max_w: 420, max_h: 2400 }
    },
    tm_m30_80: {
        width: 576,
        linespc: 30,
        ank: { font_a: 24, font_b: 20, font_c: 18, font_d: 0, font_e: 0, special_a: 24, special_b: 18 },
        kanji: { font_a: 24, font_b: 20, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 576, ini_h: 2400, max_w: 576, max_h: 2400 }
    },
    tm_m30_58: {
        width: 420,
        linespc: 30,
        ank: { font_a: 24, font_b: 20, font_c: 18, font_d: 0, font_e: 0, special_a: 24, special_b: 18 },
        kanji: { font_a: 24, font_b: 20, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 420, ini_h: 2400, max_w: 420, max_h: 2400 }
    },
    tm_m50_80: {
        width: 512,
        linespc: 30,
        ank: { font_a: 24, font_b: 20, font_c: 18, font_d: 0, font_e: 0, special_a: 24, special_b: 18 },
        kanji: { font_a: 24, font_b: 20, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 512, ini_h: 831, max_w: 512, max_h: 1662 }
    },
    tm_m50_58: {
        width: 360,
        linespc: 30,
        ank: { font_a: 24, font_b: 20, font_c: 18, font_d: 0, font_e: 0, special_a: 24, special_b: 18 },
        kanji: { font_a: 24, font_b: 20, font_c: 0, font_d: 0, font_e: 0, special_a: 0, special_b: 0 },
        page: { ini_w: 360, ini_h: 831, max_w: 360, max_h: 1662 }
    }
};

// Message
var message = {
    yes: 'Yes',
    no: 'No',
    close: 'Close',
    ok: 'OK',
    line: 'Line',
    success: 'Print Success',
    failure: 'Print Failure',
    epos_code: 'Error Code',
    epos_status: 'HTTP Status Code',
    epos_error: 'Send Error',
    epos_online: 'Online',
    epos_offline: 'Offline',
    epos_poweroff: 'No Response',
    epos_coverok: 'Cover Close',
    epos_coveropen: 'Cover Open',
    epos_paperok: 'Paper Adequate',
    epos_papernearend: 'Paper Near End',
    epos_paperend: 'Paper End',
    epos_drawerclosed: 'Drawer Close',
    epos_draweropen: 'Drawer Open',
    epos_batterylow: 'Battery Low (TM-P60II, TM-P80, TM-P20)',
    epos_batteryok: 'Battery Adequate (TM-P60II, TM-P80, TM-P20)',
    epos_batterystatus: 'Battery Status',
    epos_send: 'Send',
    epos_open: 'Open',
    epos_close: 'Close',
    epos_jobid: 'Print Job ID',
    import_noelem: 'The root element is not found.',
    import_noattr: ' element has been ignored. The element requires the following attributes: ',
    import_inelem: ' element has been ignored. The element is invalid.',
    import_inattr: ' element has been ignored. The following attribute is invalid: ',
    import_intext: ' element has been ignored. The content is incorrect.',
    import_complete: 'The import process has been completed.',
    import_abort: 'The import process has been aborted.',
    unload: 'Data you are editing will be deleted.'
};

// font
var font = '"Courier New", monospace';
