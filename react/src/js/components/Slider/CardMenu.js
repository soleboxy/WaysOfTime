//CardMenu.js
import React from 'react';

export default class CardMenu extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }



  render() {
  	const { map_id, controls_visible, thumbSelectedToggle, toggleInfoModal } = this.props;
  	const visible = controls_visible ? "" : "invisible"
    return (
      <div class={visible+" mdl-card__menu"}>
				    <button onClick={toggleInfoModal.bind(null, map_id)} 
				    	class="show-info mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" 
				    	id={"map-info-" + map_id } data-id={ map_id }>
				        	<i class="material-icons">info</i>
				    </button>
				    <button id={"delete-map-" + map_id } onClick={thumbSelectedToggle.bind(null, map_id)} class="delete mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" data-id={ map_id }>
				        <i class="material-icons">clear</i>
				    </button>
				     <button id={"inspect-map-" + map_id } class="inspect mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"
				            data-id={"nspect-map-" + map_id } >
				        <i class="material-icons">send</i>
				    </button>
				    <button id={"zoom-map-" + map_id}  class="zoom-map mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"
				            data-id={"nspect-map-" +  map_id }>
				        <i class="material-icons">gps_fixed</i>
				    </button>
		</div>
    );
  }
}
