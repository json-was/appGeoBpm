import React, {useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {useLocation} from '../../hooks';
import {Fab} from './Fab';
import {Loading} from '../';

interface Props {
  markers?: Marker[];
}

export const Map = ({markers}: Props) => {
  const {hasLocation, initialPosition, getCurrentLocation} = useLocation();

  const mapViewRef = useRef<MapView>();

  const centerPosition = async () => {
    const {latitude, longitude} = await getCurrentLocation();
    mapViewRef.current?.animateCamera({
      center: {latitude, longitude},
    });
  };

  if (!hasLocation) {
    return <Loading />;
  }

  return (
    <>
      <MapView
        ref={el => (mapViewRef.current = el!)}
        style={{flex: 1}}
        showsUserLocation
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title={'Titulo'}
          description={'Description'}
        /> */}
      </MapView>

      <Fab
        onPress={centerPosition}
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}
      />
    </>
  );
};
