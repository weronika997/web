import React, {Component} from 'react';
import {connect} from 'react-redux';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import KeplerGl from 'kepler.gl';
import {DEFAULT_MAP_STYLES} from './icgc-map-styles';
import {addDataToMap} from 'kepler.gl/actions';
import Processors from 'kepler.gl/processors';
import geojsonData from "../data/events.json";
import configMap from "../data-config/network_counts_config.json";
import {Container, Dropdown} from 'semantic-ui-react';
import SelectorComponent from "./selector";
import TopMenu from "./TopMenu";
import 'semantic-ui-css/semantic.min.css';


const MAPBOX_TOKEN = " ";


class App extends Component {

    componentDidMount() {

        const data = Processors.processGeojson(geojsonData);
        const dataset = {
            data,
            info: {
                id: 'zx0nbmuqe'
            }
        };

        this.props.dispatch(addDataToMap({datasets: dataset, config: configMap}));
    }


    render() {
        return (
            <div>
                <TopMenu/>
                <SelectorComponent/>
                <div style={{position: 'absolute', width: '100%', height: '100%', minHeight: '70vh'}}>
                <AutoSizer>
                    {({height, width}) => (
                        <KeplerGl
                            mapboxApiAccessToken={MAPBOX_TOKEN}
                            id="map"
                            width={width}
                            height={height}
                            mapStylesReplaceDefault="true"
                            mapStyles={DEFAULT_MAP_STYLES}
                        />
                    )}
                </AutoSizer>
                </div>
            </div>

        );
    }

}

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, dispatchToProps)(App);    