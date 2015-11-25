import ko from 'knockout';
import templateMarkup from 'text!./playground-doc-pane.html';
import marked from 'marked';

class PlaygroundDocPane {
    constructor(params) {
        this.docHtml = ko.observable('');
        $.get(params.docFile, (data) => {
            this.docHtml(marked(data));
        });
    }

    dispose() {
        // This runs when the component is torn down. Put here any logic necessary to clean up,
        // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
    }
}

export default { viewModel: PlaygroundDocPane, template: templateMarkup };
