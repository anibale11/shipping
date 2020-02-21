/**
 * Envios Kanguro Shipping
 *
 * @author Javier Telio Z <jtelio118@gmail.com>
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 */

define([
    'uiComponent',
    'Magento_Checkout/js/model/shipping-rates-validator',
    'Magento_Checkout/js/model/shipping-rates-validation-rules',
    '../../model/shipping-rates-validator/envioskanguro',
    '../../model/shipping-rates-validation-rules/envioskanguro'
], function (
    Component,
    defaultShippingRatesValidator,
    defaultShippingRatesValidationRules,
    envioskanguroShippingRatesValidator,
    envioskanguroShippingRatesValidationRules
) {
    'use strict';

    defaultShippingRatesValidator.registerValidator('envioskanguro', envioskanguroShippingRatesValidator);
    defaultShippingRatesValidationRules.registerRules('envioskanguro', envioskanguroShippingRatesValidationRules);

    return Component;
});
