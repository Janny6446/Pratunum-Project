(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"scrollBarColor":"#000000","start":"this.init(); this.syncPlaylists([this.mainPlayList,this.DropDown_01B917F5_2B1F_D2B8_41C5_FC61E2652272_playlist])","minHeight":0,"minWidth":0,"data":{"textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"rate":1,"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false},"locales":{"en":"locale/en.txt"},"history":{},"displayTooltipInTouchScreens":true,"defaultLocale":"en","name":"Player7618"},"children":["this.MainViewer","this.DropDown_01B917F5_2B1F_D2B8_41C5_FC61E2652272"],"backgroundColorRatios":[0],"scrollBarMargin":2,"height":"100%","width":"100%","hash": "8c0c81cf9921da2605dae909198cad279d3735501fea52bfba82a581f80cd606", "definitions": [{"vfov":180,"thumbnailUrl":"media/panorama_1FE86D41_2B0A_57D8_417E_FCBE57DC48D4_t.webp","label":trans('panorama_1FE86D41_2B0A_57D8_417E_FCBE57DC48D4.label'),"data":{"label":"Ready to rent"},"id":"panorama_1FE86D41_2B0A_57D8_417E_FCBE57DC48D4","overlays":["this.overlay_015ADC4E_2B0A_D5E8_41C3_ED2D9DF6A2B3"],"class":"Panorama","hfovMax":130,"frames":[{"thumbnailUrl":"media/panorama_1FE86D41_2B0A_57D8_417E_FCBE57DC48D4_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"colCount":24,"url":"media/panorama_1FE86D41_2B0A_57D8_417E_FCBE57DC48D4_0/{face}/0/{row}_{column}.webp","rowCount":4,"height":2048,"tags":"ondemand","class":"TiledImageResourceLevel","width":12288},{"colCount":12,"url":"media/panorama_1FE86D41_2B0A_57D8_417E_FCBE57DC48D4_0/{face}/1/{row}_{column}.webp","rowCount":2,"height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","width":6144},{"colCount":6,"url":"media/panorama_1FE86D41_2B0A_57D8_417E_FCBE57DC48D4_0/{face}/2/{row}_{column}.webp","rowCount":1,"height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","width":3072}]}}],"hfov":360},{"enterPointingToHorizon":true,"initialPosition":{"yaw":3.54,"pitch":-36.23,"class":"PanoramaCameraPosition"},"id":"panorama_C82BB8C3_EE92_3840_41E5_33A672B8A552_camera","class":"PanoramaCamera","initialSequence":"this.sequence_C9099A93_EE92_D8C0_41D6_27452F48E120"},{"items":[{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_C82BB8C3_EE92_3840_41E5_33A672B8A552","class":"PanoramaPlayListItem","camera":"this.panorama_C82BB8C3_EE92_3840_41E5_33A672B8A552_camera"},{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_C93C56BB_E29E_48C0_41DB_E4E32B2C896C","class":"PanoramaPlayListItem","camera":"this.panorama_C93C56BB_E29E_48C0_41DB_E4E32B2C896C_camera"},{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_1FE86D41_2B0A_57D8_417E_FCBE57DC48D4","class":"PanoramaPlayListItem","camera":"this.panorama_1FE86D41_2B0A_57D8_417E_FCBE57DC48D4_camera"},{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_01D69A86_2B06_FD58_41C6_08B5B2AE6116","class":"PanoramaPlayListItem","camera":"this.panorama_01D69A86_2B06_FD58_41C6_08B5B2AE6116_camera"}],"id":"DropDown_01B917F5_2B1F_D2B8_41C5_FC61E2652272_playlist","changing":"var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)","class":"PlayList"},{"vfov":180,"thumbnailUrl":"media/panorama_C82BB8C3_EE92_3840_41E5_33A672B8A552_t.webp","label":trans('panorama_C82BB8C3_EE92_3840_41E5_33A672B8A552.label'),"data":{"label":"Original Area"},"id":"panorama_C82BB8C3_EE92_3840_41E5_33A672B8A552","overlays":["this.overlay_027036F3_2B0A_D2B8_41BB_2C24A2AE9D37"],"class":"Panorama","hfovMax":130,"frames":[{"thumbnailUrl":"media/panorama_C82BB8C3_EE92_3840_41E5_33A672B8A552_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"colCount":24,"url":"media/panorama_C82BB8C3_EE92_3840_41E5_33A672B8A552_0/{face}/0/{row}_{column}.webp","rowCount":4,"height":2048,"tags":"ondemand","class":"TiledImageResourceLevel","width":12288},{"colCount":12,"url":"media/panorama_C82BB8C3_EE92_3840_41E5_33A672B8A552_0/{face}/1/{row}_{column}.webp","rowCount":2,"height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","width":6144},{"colCount":6,"url":"media/panorama_C82BB8C3_EE92_3840_41E5_33A672B8A552_0/{face}/2/{row}_{column}.webp","rowCount":1,"height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","width":3072}]}}],"hfov":360},{"enterPointingToHorizon":true,"initialPosition":{"yaw":3.38,"pitch":-36,"class":"PanoramaCameraPosition"},"id":"panorama_01D69A86_2B06_FD58_41C6_08B5B2AE6116_camera","class":"PanoramaCamera","initialSequence":"this.sequence_1E15CDB2_2B06_D6B8_41A3_C0A94F6358FC"},{"enterPointingToHorizon":true,"initialPosition":{"yaw":3.21,"pitch":-34.31,"class":"PanoramaCameraPosition"},"id":"panorama_C93C56BB_E29E_48C0_41DB_E4E32B2C896C_camera","class":"PanoramaCamera","initialSequence":"this.sequence_CB36FCBD_E29E_38C0_41E7_72B3907CDB06"},{"vfov":180,"thumbnailUrl":"media/panorama_01D69A86_2B06_FD58_41C6_08B5B2AE6116_t.webp","label":trans('panorama_01D69A86_2B06_FD58_41C6_08B5B2AE6116.label'),"data":{"label":"Idea Hotel"},"id":"panorama_01D69A86_2B06_FD58_41C6_08B5B2AE6116","overlays":["this.overlay_0029B56E_2B1E_57A8_418B_700C1CE58560"],"class":"Panorama","hfovMax":130,"frames":[{"thumbnailUrl":"media/panorama_01D69A86_2B06_FD58_41C6_08B5B2AE6116_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"colCount":24,"url":"media/panorama_01D69A86_2B06_FD58_41C6_08B5B2AE6116_0/{face}/0/{row}_{column}.webp","rowCount":4,"height":2048,"tags":"ondemand","class":"TiledImageResourceLevel","width":12288},{"colCount":12,"url":"media/panorama_01D69A86_2B06_FD58_41C6_08B5B2AE6116_0/{face}/1/{row}_{column}.webp","rowCount":2,"height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","width":6144},{"colCount":6,"url":"media/panorama_01D69A86_2B06_FD58_41C6_08B5B2AE6116_0/{face}/2/{row}_{column}.webp","rowCount":1,"height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","width":3072}]}}],"hfov":360},{"playbackBarHeadShadowOpacity":0.7,"vrPointerSelectionTime":2000,"surfaceReticleSelectionColor":"#FFFFFF","toolTipFontFamily":"Arial","minHeight":50,"minWidth":100,"playbackBarBorderRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarProgressBorderColor":"#000000","height":"100%","width":"100%","playbackBarBorderColor":"#FFFFFF","subtitlesFontFamily":"Arial","playbackBarHeadBorderRadius":0,"toolTipPaddingRight":6,"vrThumbstickRotationStep":20,"class":"ViewerArea","playbackBarHeadBorderColor":"#000000","toolTipBorderColor":"#767676","propagateClick":false,"progressBackgroundColorRatios":[0],"toolTipBackgroundColor":"#F6F6F6","subtitlesGap":0,"data":{"name":"Main Viewer"},"progressRight":"33%","playbackBarBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"toolTipFontSize":"1.11vmin","firstTransitionDuration":0,"subtitlesBackgroundColor":"#000000","progressOpacity":0.7,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"id":"MainViewer","playbackBarHeadShadowBlurRadius":3,"toolTipPaddingTop":4,"surfaceReticleColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"playbackBarLeft":0,"subtitlesTextShadowOpacity":1,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowColor":"#000000","playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"vrPointerColor":"#FFFFFF","progressBackgroundColor":["#000000"],"subtitlesTop":0,"progressBorderColor":"#000000","playbackBarHeadShadowVerticalLength":0,"subtitlesFontSize":"3vmin","toolTipPaddingLeft":6,"playbackBarHeadShadowHorizontalLength":0,"progressBottom":10,"toolTipTextShadowColor":"#000000","playbackBarBottom":5,"subtitlesBackgroundOpacity":0.2,"progressBorderSize":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressHeight":2,"subtitlesBottom":50,"progressBarBorderSize":0,"toolTipFontColor":"#606060","playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingBottom":4,"progressBarBorderRadius":2,"toolTipShadowColor":"#333138","subtitlesBorderColor":"#FFFFFF","playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"playbackBarHeight":10,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBorderRadius":2,"progressLeft":"33%","vrPointerSelectionColor":"#FF6600"},{"vfov":180,"thumbnailUrl":"media/panorama_C93C56BB_E29E_48C0_41DB_E4E32B2C896C_t.webp","label":trans('panorama_C93C56BB_E29E_48C0_41DB_E4E32B2C896C.label'),"data":{"label":"Clear to garden"},"id":"panorama_C93C56BB_E29E_48C0_41DB_E4E32B2C896C","overlays":["this.overlay_02A0E8FA_2B0A_5EA8_41C7_60F60D668E1A"],"class":"Panorama","hfovMax":130,"frames":[{"thumbnailUrl":"media/panorama_C93C56BB_E29E_48C0_41DB_E4E32B2C896C_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"colCount":24,"url":"media/panorama_C93C56BB_E29E_48C0_41DB_E4E32B2C896C_0/{face}/0/{row}_{column}.webp","rowCount":4,"height":2048,"tags":"ondemand","class":"TiledImageResourceLevel","width":12288},{"colCount":12,"url":"media/panorama_C93C56BB_E29E_48C0_41DB_E4E32B2C896C_0/{face}/1/{row}_{column}.webp","rowCount":2,"height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","width":6144},{"colCount":6,"url":"media/panorama_C93C56BB_E29E_48C0_41DB_E4E32B2C896C_0/{face}/2/{row}_{column}.webp","rowCount":1,"height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","width":3072}]}}],"hfov":360},{"enterPointingToHorizon":true,"initialPosition":{"yaw":3.25,"pitch":-34.48,"class":"PanoramaCameraPosition"},"id":"panorama_1FE86D41_2B0A_57D8_417E_FCBE57DC48D4_camera","class":"PanoramaCamera","initialSequence":"this.sequence_1F0A1CA7_2B0A_7558_41B9_7D88EBFBB242"},{"fontColor":"#333333","data":{"name":"DropDown1204"},"minHeight":20,"borderSize":0,"paddingTop":0,"minWidth":200,"popUpFontColor":"#000000","paddingBottom":0,"backgroundColorRatios":[0,1],"width":"11.212%","height":"3.618%","class":"DropDown","fontSize":14,"selectedPopUpBackgroundColor":"#CC6600","popUpShadow":false,"prompt":trans('DropDown_01B917F5_2B1F_D2B8_41C5_FC61E2652272.prompt'),"borderRadius":10,"propagateClick":false,"rollOverPopUpBackgroundColor":"#FFFFFF","selectedPopUpFontColor":"#FFFFFF","backgroundColor":["#FF9900","#CC6633"],"playList":"this.DropDown_01B917F5_2B1F_D2B8_41C5_FC61E2652272_playlist","fontFamily":"Arial","popUpBackgroundColor":"#FFFFFF","arrowColor":"#660000","top":"2.57%","left":"38.88%","tabIndex":0,"horizontalAlign":"center","id":"DropDown_01B917F5_2B1F_D2B8_41C5_FC61E2652272"},{"touchControlMode":"drag_rotation","arrowKeysAction":"translate","aaEnabled":true,"mouseControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true,"displayPlaybackBar":true,"viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer"},{"items":[{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_C82BB8C3_EE92_3840_41E5_33A672B8A552","class":"PanoramaPlayListItem","camera":"this.panorama_C82BB8C3_EE92_3840_41E5_33A672B8A552_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_C93C56BB_E29E_48C0_41DB_E4E32B2C896C","class":"PanoramaPlayListItem","camera":"this.panorama_C93C56BB_E29E_48C0_41DB_E4E32B2C896C_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_1FE86D41_2B0A_57D8_417E_FCBE57DC48D4","class":"PanoramaPlayListItem","camera":"this.panorama_1FE86D41_2B0A_57D8_417E_FCBE57DC48D4_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_01D69A86_2B06_FD58_41C6_08B5B2AE6116","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","camera":"this.panorama_01D69A86_2B06_FD58_41C6_08B5B2AE6116_camera","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"areas":["this.HotspotPanoramaOverlayArea_016DEC66_2B0A_D5D8_41C6_3C0B3839BD9B"],"useHandCursor":true,"items":[{"distance":50,"data":{"label":"Polygon"},"image":{"levels":[{"url":"media/panorama_1FE86D41_2B0A_57D8_417E_FCBE57DC48D4_HS_wki2epgg.webp","height":258,"class":"ImageResourceLevel","width":497}],"class":"ImageResource"},"class":"HotspotPanoramaOverlayImage","pitch":-43.9,"hfov":34.71,"yaw":98.92,"vfov":18.46}],"maps":[],"data":{"label":"Polygon"},"id":"overlay_015ADC4E_2B0A_D5E8_41C3_ED2D9DF6A2B3","enabledInVR":true,"class":"HotspotPanoramaOverlay"},{"id":"sequence_C9099A93_EE92_D8C0_41D6_27452F48E120","movements":[{"yawDelta":18.5,"yawSpeed":3.19,"easing":"cubic_in","class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":3.19,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":3.19,"easing":"cubic_out","class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence"},{"areas":["this.HotspotPanoramaOverlayArea_026BE6FE_2B0A_D2A8_41A3_83C1714DBED4"],"useHandCursor":true,"items":[{"distance":50,"data":{"label":"Polygon"},"image":{"levels":[{"url":"media/panorama_C82BB8C3_EE92_3840_41E5_33A672B8A552_HS_8bhqeooa_1.webp","height":1590,"class":"ImageResourceLevel","width":1590}],"class":"ImageResource"},"class":"HotspotPanoramaOverlayImage","pitch":0,"hfov":90,"yaw":90,"vfov":90},{"distance":50,"hfov":90,"yaw":180,"image":{"class":"ImageResource","levels":[{"url":"media/panorama_C82BB8C3_EE92_3840_41E5_33A672B8A552_HS_8bhqeooa_2.webp","height":1590,"class":"ImageResourceLevel","width":1590}]},"class":"HotspotPanoramaOverlayImage"},{"distance":50,"hfov":90,"yaw":-90,"image":{"class":"ImageResource","levels":[{"url":"media/panorama_C82BB8C3_EE92_3840_41E5_33A672B8A552_HS_8bhqeooa_3.webp","height":1590,"class":"ImageResourceLevel","width":1590}]},"class":"HotspotPanoramaOverlayImage"},{"distance":50,"pitch":-90,"hfov":90,"image":{"class":"ImageResource","levels":[{"url":"media/panorama_C82BB8C3_EE92_3840_41E5_33A672B8A552_HS_8bhqeooa_5.webp","height":1590,"class":"ImageResourceLevel","width":1590}]},"class":"HotspotPanoramaOverlayImage"}],"maps":[],"data":{"label":"Polygon"},"id":"overlay_027036F3_2B0A_D2B8_41BB_2C24A2AE9D37","enabledInVR":true,"class":"HotspotPanoramaOverlay"},{"id":"sequence_1E15CDB2_2B06_D6B8_41A3_C0A94F6358FC","movements":[{"yawDelta":18.5,"yawSpeed":3.19,"easing":"cubic_in","class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":3.19,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":3.19,"easing":"cubic_out","class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence"},{"id":"sequence_CB36FCBD_E29E_38C0_41E7_72B3907CDB06","movements":[{"yawDelta":18.5,"yawSpeed":3.19,"easing":"cubic_in","class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":3.19,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":3.19,"easing":"cubic_out","class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence"},{"areas":["this.HotspotPanoramaOverlayArea_0029E570_2B1E_57B8_41B3_4925E4B8AC8C"],"useHandCursor":true,"items":[{"distance":50,"data":{"label":"Polygon"},"image":{"levels":[{"url":"media/panorama_01D69A86_2B06_FD58_41C6_08B5B2AE6116_HS_gkpvvykx.webp","height":258,"class":"ImageResourceLevel","width":497}],"class":"ImageResource"},"class":"HotspotPanoramaOverlayImage","pitch":-43.9,"hfov":34.71,"yaw":98.92,"vfov":18.46}],"maps":[],"data":{"label":"Polygon"},"id":"overlay_0029B56E_2B1E_57A8_418B_700C1CE58560","enabledInVR":true,"class":"HotspotPanoramaOverlay"},{"areas":["this.HotspotPanoramaOverlayArea_02A0D8FB_2B0A_5EA8_41A4_4E0A861FC49B"],"useHandCursor":true,"items":[{"distance":50,"data":{"label":"Polygon"},"image":{"levels":[{"url":"media/panorama_C93C56BB_E29E_48C0_41DB_E4E32B2C896C_HS_4qoqgwjm_1.webp","height":1590,"class":"ImageResourceLevel","width":1590}],"class":"ImageResource"},"class":"HotspotPanoramaOverlayImage","pitch":0,"hfov":90,"yaw":90,"vfov":90},{"distance":50,"hfov":90,"yaw":180,"image":{"class":"ImageResource","levels":[{"url":"media/panorama_C93C56BB_E29E_48C0_41DB_E4E32B2C896C_HS_4qoqgwjm_2.webp","height":1590,"class":"ImageResourceLevel","width":1590}]},"class":"HotspotPanoramaOverlayImage"},{"distance":50,"hfov":90,"yaw":-90,"image":{"class":"ImageResource","levels":[{"url":"media/panorama_C93C56BB_E29E_48C0_41DB_E4E32B2C896C_HS_4qoqgwjm_3.webp","height":1590,"class":"ImageResourceLevel","width":1590}]},"class":"HotspotPanoramaOverlayImage"},{"distance":50,"pitch":-90,"hfov":90,"image":{"class":"ImageResource","levels":[{"url":"media/panorama_C93C56BB_E29E_48C0_41DB_E4E32B2C896C_HS_4qoqgwjm_5.webp","height":1590,"class":"ImageResourceLevel","width":1590}]},"class":"HotspotPanoramaOverlayImage"}],"maps":[],"data":{"label":"Polygon"},"id":"overlay_02A0E8FA_2B0A_5EA8_41C7_60F60D668E1A","enabledInVR":true,"class":"HotspotPanoramaOverlay"},{"id":"sequence_1F0A1CA7_2B0A_7558_41B9_7D88EBFBB242","movements":[{"yawDelta":18.5,"yawSpeed":3.19,"easing":"cubic_in","class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":3.19,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":3.19,"easing":"cubic_out","class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_016DEC66_2B0A_D5D8_41C6_3C0B3839BD9B","class":"HotspotPanoramaOverlayArea","mapColor":"image"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_026BE6FE_2B0A_D2A8_41A3_83C1714DBED4","class":"HotspotPanoramaOverlayArea","mapColor":"image"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_0029E570_2B1E_57B8_41B3_4925E4B8AC8C","class":"HotspotPanoramaOverlayArea","mapColor":"image"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_02A0D8FB_2B0A_5EA8_41A4_4E0A861FC49B","class":"HotspotPanoramaOverlayArea","mapColor":"image"}],"class":"Player","propagateClick":false,"scripts":{"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"shareSocial":TDV.Tour.Script.shareSocial,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"isPanorama":TDV.Tour.Script.isPanorama,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizFinish":TDV.Tour.Script.quizFinish,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"historyGoBack":TDV.Tour.Script.historyGoBack,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"historyGoForward":TDV.Tour.Script.historyGoForward,"clone":TDV.Tour.Script.clone,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"translate":TDV.Tour.Script.translate,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"showWindow":TDV.Tour.Script.showWindow,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setValue":TDV.Tour.Script.setValue,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"unloadViewer":TDV.Tour.Script.unloadViewer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"init":TDV.Tour.Script.init,"showWindowBase":TDV.Tour.Script.showWindowBase,"enableVR":TDV.Tour.Script.enableVR,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"cloneBindings":TDV.Tour.Script.cloneBindings,"getKey":TDV.Tour.Script.getKey,"initAnalytics":TDV.Tour.Script.initAnalytics,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"disableVR":TDV.Tour.Script.disableVR,"mixObject":TDV.Tour.Script.mixObject,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPixels":TDV.Tour.Script.getPixels,"resumePlayers":TDV.Tour.Script.resumePlayers,"toggleVR":TDV.Tour.Script.toggleVR,"setLocale":TDV.Tour.Script.setLocale,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"textToSpeech":TDV.Tour.Script.textToSpeech,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"registerKey":TDV.Tour.Script.registerKey,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getComponentByName":TDV.Tour.Script.getComponentByName,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"downloadFile":TDV.Tour.Script.downloadFile,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"existsKey":TDV.Tour.Script.existsKey,"startMeasurement":TDV.Tour.Script.startMeasurement,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"initQuiz":TDV.Tour.Script.initQuiz,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizShowScore":TDV.Tour.Script.quizShowScore,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getOverlays":TDV.Tour.Script.getOverlays,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"playAudioList":TDV.Tour.Script.playAudioList,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"createTween":TDV.Tour.Script.createTween,"getMainViewer":TDV.Tour.Script.getMainViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"unregisterKey":TDV.Tour.Script.unregisterKey,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"openLink":TDV.Tour.Script.openLink,"quizStart":TDV.Tour.Script.quizStart,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"executeJS":TDV.Tour.Script.executeJS,"setMapLocation":TDV.Tour.Script.setMapLocation},"watermark":false,"backgroundColor":["#FFFFFF"],"defaultMenu":["fullscreen","mute","rotation"],"layout":"absolute","gap":10,"id":"rootPlayer"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.0.9, Sat May 16 2026