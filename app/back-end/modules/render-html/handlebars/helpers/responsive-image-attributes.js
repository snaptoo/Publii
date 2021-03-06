const Handlebars = require('handlebars');
const responsiveSrcSet = require('./responsive-srcset.js');
const responsiveSizes = require('./responsive-sizes.js');

/**
 * Helper for sizes attribute for the images from options
 *
 * {{responsiveImageAttributes @config.custom.imageOptionName [group]}}
 *
 * @returns {string} - string with the srcset and sizes attributes
 */
function responsiveImageAttributesHelper(rendererInstance, Handlebars) {
    Handlebars.registerHelper('responsiveImageAttributes', function (url, group) {
        let srcSet = responsiveSrcSet.returnSrcSetAttribute.bind(rendererInstance)(url);
        let sizes = responsiveSizes.returnSizesAttribute.bind(rendererInstance)(group);

        if (srcSet) {
            return new Handlebars.SafeString(srcSet + ' ' + sizes);
        }

        return new Handlebars.SafeString(srcSet);
    });
}

module.exports = responsiveImageAttributesHelper;
