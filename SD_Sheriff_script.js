
(function () {
    var s = document.createElement('script');
    var h = document.querySelector('head') || document.body;
    s.src = 'https://acsbapp.com/apps/app/dist/js/app.js';
    s.async = true;
    s.onload = function () {
        acsbJS.init({
            statementLink: '',
            footerHtml: '',
            hideMobile: false,
            hideTrigger: false,
            disableBgProcess: false,
            language: 'en',
            position: 'left',
            leadColor: '#025f19',
            triggerColor: '#025b19',
            triggerRadius: '25%',
            triggerPositionX: 'left',
            triggerPositionY: 'bottom',
            triggerIcon: 'people2',
            triggerSize: 'medium',
            triggerOffsetX: 20,
            triggerOffsetY: 20,
            mobile: {
                triggerSize: 'small',
                triggerPositionX: 'left',
                triggerPositionY: 'bottom',
                triggerOffsetX: 10,
                triggerOffsetY: 10,
                triggerRadius: '50%'
            }
        });
        AJS.events.on(window, "acsbWidgetOpen", () => {
            try {
                const widgetUi = document.querySelector(
                    '[data-acsb="widget"]'
                ).shadowRoot;

                const baseCardDiv = widgetUi.querySelector('.base-card');
                const config = { childList: true, subtree: true };

                const callback = (mutationsList) => {
                    for (const mutation of mutationsList) {
                        if (mutation.type === 'childList') {
                            const accessibilityDiv = baseCardDiv.querySelector('.accessibility-statement-modal-content');
                            if (accessibilityDiv) {
                                console.log('Found accessibility-statement-modal-content div:', accessibilityDiv);
                                const pElements = Array.from(accessibilityDiv.getElementsByTagName('p'));
                                if (pElements.length > 0) {
                                    pElements[pElements.length - 1].textContent = 'Despite our very best efforts to allow anybody to adjust the website to their needs, there may still be pages or sections that are not fully accessible, are in the process of becoming accessible, or are lacking an adequate technological solution to make them accessible. Still, we are continually improving our accessibility, adding, updating, improving its options and features, and developing and adopting new technologies. All this is meant to reach the optimal level of accessibility following technological advancements. You can notify the Sheriff`s Office about web accessibility problems by contacting the ADA Unit at 858 - 974 - 5841 or ADA.Unit@sdsheriff.gov';

                                }
                            }
                        }
                    };
                }

                const observer = new MutationObserver(callback);

                if (baseCardDiv) {
                    console.log('Base-card div found');
                    observer.observe(baseCardDiv, config);
                } else {
                    console.log('No element found with class "base-card"');
                }

            } catch (error) { }
        });
    };
    h.appendChild(s);
})();
