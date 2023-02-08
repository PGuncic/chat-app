import elementFromString from './element-from-string.js';

export default function defineComponent(blueprint = {}) {
    const Component = function(props = {}) {
        this.props = props;
        this.htmlElement = null;
        this.render();
    };
  
    Object.assign(Component.prototype, {
        updateProp(propName, propValue) {
            this.props[propName] = propValue;
            this.render();
        },
        render() {
            const htmlElement = elementFromString(this.template());
            if (this.htmlElement) {
                this.htmlElement.replaceWith(htmlElement);
            }
            this.htmlElement = htmlElement;
            
            if (this.setupEvents) {
                this.setupEvents();
            }
        }
    }, blueprint);
  
    return Component;
  };