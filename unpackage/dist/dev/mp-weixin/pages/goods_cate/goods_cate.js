(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/goods_cate/goods_cate"],{

/***/ 105:
/*!*******************************************************************************************************************************************!*\
  !*** D:/WeChat/文件备份/WeChat Files/wxid_19c3c5m8aigw12/FileStorage/File/2025-06/uni-app/main.js?{"page":"pages%2Fgoods_cate%2Fgoods_cate"} ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _goods_cate = _interopRequireDefault(__webpack_require__(/*! ./pages/goods_cate/goods_cate.vue */ 106));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_goods_cate.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 106:
/*!************************************************************************************************************************!*\
  !*** D:/WeChat/文件备份/WeChat Files/wxid_19c3c5m8aigw12/FileStorage/File/2025-06/uni-app/pages/goods_cate/goods_cate.vue ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goods_cate_vue_vue_type_template_id_2fb93f74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods_cate.vue?vue&type=template&id=2fb93f74&scoped=true& */ 107);
/* harmony import */ var _goods_cate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods_cate.vue?vue&type=script&lang=js& */ 109);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goods_cate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goods_cate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _goods_cate_vue_vue_type_style_index_0_id_2fb93f74_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods_cate.vue?vue&type=style&index=0&id=2fb93f74&scoped=true&lang=scss& */ 111);
/* harmony import */ var _download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../download/HBuilderX.4.36.2024112817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 64);

var renderjs





/* normalize component */

var component = Object(_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _goods_cate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goods_cate_vue_vue_type_template_id_2fb93f74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goods_cate_vue_vue_type_template_id_2fb93f74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2fb93f74",
  null,
  false,
  _goods_cate_vue_vue_type_template_id_2fb93f74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/goods_cate/goods_cate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 107:
/*!*******************************************************************************************************************************************************************!*\
  !*** D:/WeChat/文件备份/WeChat Files/wxid_19c3c5m8aigw12/FileStorage/File/2025-06/uni-app/pages/goods_cate/goods_cate.vue?vue&type=template&id=2fb93f74&scoped=true& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_cate_vue_vue_type_template_id_2fb93f74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../download/HBuilderX.4.36.2024112817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../download/HBuilderX.4.36.2024112817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../../../download/HBuilderX.4.36.2024112817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../../../download/HBuilderX.4.36.2024112817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../../download/HBuilderX.4.36.2024112817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../../download/HBuilderX.4.36.2024112817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods_cate.vue?vue&type=template&id=2fb93f74&scoped=true& */ 108);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_cate_vue_vue_type_template_id_2fb93f74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_cate_vue_vue_type_template_id_2fb93f74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_cate_vue_vue_type_template_id_2fb93f74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_cate_vue_vue_type_template_id_2fb93f74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 108:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/WeChat/文件备份/WeChat Files/wxid_19c3c5m8aigw12/FileStorage/File/2025-06/uni-app/pages/goods_cate/goods_cate.vue?vue&type=template&id=2fb93f74&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 109:
/*!*************************************************************************************************************************************************!*\
  !*** D:/WeChat/文件备份/WeChat Files/wxid_19c3c5m8aigw12/FileStorage/File/2025-06/uni-app/pages/goods_cate/goods_cate.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_cate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../download/HBuilderX.4.36.2024112817/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../../download/HBuilderX.4.36.2024112817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../../../../download/HBuilderX.4.36.2024112817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../../../download/HBuilderX.4.36.2024112817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../../download/HBuilderX.4.36.2024112817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods_cate.vue?vue&type=script&lang=js& */ 110);
/* harmony import */ var _download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_cate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_cate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_cate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_cate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_cate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 110:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/WeChat/文件备份/WeChat Files/wxid_19c3c5m8aigw12/FileStorage/File/2025-06/uni-app/pages/goods_cate/goods_cate.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _color = _interopRequireDefault(__webpack_require__(/*! @/mixins/color */ 55));
var _api = __webpack_require__(/*! @/api/api.js */ 53);
var _vuex = __webpack_require__(/*! vuex */ 35);
var _public = __webpack_require__(/*! @/api/public.js */ 50);
//
//
//
//
//
//
//
//
//
var goodsCate1 = function goodsCate1() {
  Promise.all(/*! require.ensure | pages/goods_cate/goods_cate1 */[__webpack_require__.e("common/vendor"), __webpack_require__.e("pages/goods_cate/goods_cate1")]).then((function () {
    return resolve(__webpack_require__(/*! ./goods_cate1 */ 1322));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var goodsCate2 = function goodsCate2() {
  Promise.all(/*! require.ensure | pages/goods_cate/goods_cate2 */[__webpack_require__.e("common/vendor"), __webpack_require__.e("pages/goods_cate/goods_cate2")]).then((function () {
    return resolve(__webpack_require__(/*! ./goods_cate2 */ 1330));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var goodsCate3 = function goodsCate3() {
  Promise.all(/*! require.ensure | pages/goods_cate/goods_cate3 */[__webpack_require__.e("common/vendor"), __webpack_require__.e("pages/goods_cate/goods_cate3")]).then((function () {
    return resolve(__webpack_require__(/*! ./goods_cate3 */ 1337));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var pageFooter = function pageFooter() {
  Promise.all(/*! require.ensure | components/pageFooter/index */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/pageFooter/index")]).then((function () {
    return resolve(__webpack_require__(/*! @/components/pageFooter/index.vue */ 1277));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  computed: (0, _vuex.mapGetters)(['isLogin', 'uid']),
  components: {
    goodsCate1: goodsCate1,
    goodsCate2: goodsCate2,
    goodsCate3: goodsCate3,
    pageFooter: pageFooter
  },
  mixins: [_color.default],
  data: function data() {
    return {
      category: '',
      is_diy: uni.getStorageSync('is_diy'),
      status: 0,
      version: '',
      isNew: false,
      isFooter: false,
      showBar: false
    };
  },
  onLoad: function onLoad() {},
  onReady: function onReady() {},
  onShow: function onShow() {
    this.getCategoryVersion();
  },
  methods: {
    newDataStatus: function newDataStatus(val, num) {
      this.isFooter = val ? true : false;
      this.showBar = val ? true : false;
      this.pdHeight = num;
    },
    getCategoryVersion: function getCategoryVersion() {
      var _this = this;
      uni.$emit('uploadFooter');
      (0, _public.getCategoryVersion)().then(function (res) {
        if (!uni.getStorageSync('CAT_VERSION') || res.data.version != uni.getStorageSync('CAT_VERSION')) {
          uni.setStorageSync('CAT_VERSION', res.data.version);
          uni.$emit('uploadCatData');
        }
        _this.classStyle();
      });
    },
    jumpIndex: function jumpIndex() {
      uni.reLaunch({
        url: '/pages/index/index'
      });
    },
    classStyle: function classStyle() {
      var _this2 = this;
      (0, _api.colorChange)('category').then(function (res) {
        var status = res.data.status;
        _this2.category = status;
        uni.setStorageSync('is_diy', res.data.is_diy);
        _this2.$nextTick(function (e) {
          if (status == 2 || status == 3) {
            uni.hideTabBar();
          } else {
            _this2.$refs.classOne.is_diy = res.data.is_diy;
            if (!_this2.is_diy) {
              uni.hideTabBar();
            } else {
              _this2.$refs.classOne.getNav();
            }
          }
        });
      });
    }
  },
  onReachBottom: function onReachBottom() {
    if (this.category == 2) {
      this.$refs.classTwo.productslist();
    }
    if (this.category == 3) {
      this.$refs.classThree.productslist();
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 111:
/*!**********************************************************************************************************************************************************************************!*\
  !*** D:/WeChat/文件备份/WeChat Files/wxid_19c3c5m8aigw12/FileStorage/File/2025-06/uni-app/pages/goods_cate/goods_cate.vue?vue&type=style&index=0&id=2fb93f74&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_cate_vue_vue_type_style_index_0_id_2fb93f74_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../download/HBuilderX.4.36.2024112817/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../../../download/HBuilderX.4.36.2024112817/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../../../../download/HBuilderX.4.36.2024112817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../../download/HBuilderX.4.36.2024112817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../../../../download/HBuilderX.4.36.2024112817/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../../../download/HBuilderX.4.36.2024112817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../../../../download/HBuilderX.4.36.2024112817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../../../download/HBuilderX.4.36.2024112817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../../download/HBuilderX.4.36.2024112817/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods_cate.vue?vue&type=style&index=0&id=2fb93f74&scoped=true&lang=scss& */ 112);
/* harmony import */ var _download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_cate_vue_vue_type_style_index_0_id_2fb93f74_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_cate_vue_vue_type_style_index_0_id_2fb93f74_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_cate_vue_vue_type_style_index_0_id_2fb93f74_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_cate_vue_vue_type_style_index_0_id_2fb93f74_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_download_HBuilderX_4_36_2024112817_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_cate_vue_vue_type_style_index_0_id_2fb93f74_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 112:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/WeChat/文件备份/WeChat Files/wxid_19c3c5m8aigw12/FileStorage/File/2025-06/uni-app/pages/goods_cate/goods_cate.vue?vue&type=style&index=0&id=2fb93f74&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[105,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/goods_cate/goods_cate.js.map