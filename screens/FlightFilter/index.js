import React, {useState} from 'react';
import {View, FlatList, Switch, ScrollView} from 'react-native';
import {BaseStyle, BaseColor, useTheme} from '@config';
import {Header, SafeAreaView, Icon, Text, BookingTime, Tag} from '@components';
import {useTranslation} from 'react-i18next';
import RangeSlider from 'rn-range-slider';
import * as Utils from '@utils';
import styles from './styles';

export default function FlightFilter({navigation}) {
  const {t} = useTranslation();
  const [round, setRound] = useState(true);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [priceBegin, setPriceBegin] = useState(0);
  const [priceEnd, setPriceEnd] = useState(1000);
  const [durationBegin, setDurationBegin] = useState(0);
  const [durationEnd, setDurationEnd] = useState(18);
  const [facilities, setFacilities] = useState([
    {id: '1', name: 'Economy', checked: true},
    {id: '2', name: 'Business'},
    {id: '3', name: 'First'},
    {id: '4', name: 'Normal'},
  ]);
  const [transit, setTransit] = useState([
    {id: '1', name: 'Direct', checked: true},
    {id: '2', name: '1 Transit'},
    {id: '3', name: '2 Transits'},
    {id: '4', name: '+2 Transits'},
  ]);
  const {colors} = useTheme();

  /**
   * call on change round
   * @param {*} status
   */
  const onChangeRound = status => {
    setRound(status);
  };

  const onSelectTransit = select => {
    setTransit(
      transit.map(item => {
        if (item.name == select.name) {
          return {
            ...item,
            checked: true,
          };
        } else {
          return {
            ...item,
            checked: false,
          };
        }
      }),
    );
  };

  const onSelectFacilities = select => {
    setFacilities(
      facilities.map(item => {
        if (item.name == select.name) {
          return {
            ...item,
            checked: true,
          };
        } else {
          return {
            ...item,
            checked: false,
          };
        }
      }),
    );
  };

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header
        title={t('filtering')}
        renderLeft={() => {
          return <Icon name="times" size={20} color={colors.primary} />;
        }}
        renderRight={() => {
          return (
            <Text headline primaryColor numberOfLines={1}>
              {t('apply')}
            </Text>
          );
        }}
        onPressLeft={() => navigation.goBack()}
        onPressRight={() => navigation.goBack()}
      />
      <ScrollView
        scrollEnabled={scrollEnabled}
        onContentSizeChange={(contentWidth, contentHeight) =>
          setScrollEnabled(Utils.scrollEnabled(contentWidth, contentHeight))
        }>
        <View style={styles.contain}>
          <BookingTime style={{marginTop: 20, marginHorizontal: 20}} />
          <View style={styles.roundLine}>
            <Text headline semibold>
              {t('round_trip').toUpperCase()}
            </Text>
            <Switch size={18} onValueChange={onChangeRound} value={round} />
          </View>
          <View style={{marginTop: 20, marginHorizontal: 20}}>
            <Text headline semibold>
              {t('price').toUpperCase()}
            </Text>
            <View style={styles.contentRange}>
              <Text caption1 grayColor>
                $100
              </Text>
              <Text caption1 grayColor>
                $1000
              </Text>
            </View>
            <RangeSlider
              style={{
                width: '100%',
                height: 40,
              }}
              thumbRadius={12}
              lineWidth={5}
              gravity={'center'}
              labelStyle="none"
              min={100}
              max={1000}
              step={1}
              selectionColor={colors.primary}
              blankColor={BaseColor.dividerColor}
              onValueChanged={(low, high, fromUser) => {
                setPriceBegin(low);
                setPriceEnd(high);
              }}
              onTouchStart={() => {
                setScrollEnabled(false);
              }}
              onTouchEnd={() => {
                setScrollEnabled(false);
              }}
            />
            <View style={styles.contentResultRange}>
              <Text caption1>{t('avg_price')}</Text>
              <Text caption1>
                ${priceBegin} - ${priceEnd}
              </Text>
            </View>
          </View>
          <Text headline semibold style={{marginLeft: 20, marginTop: 20}}>
            {t('facilities').toUpperCase()}
          </Text>
          <View style={{marginTop: 5}}>
            <FlatList
              contentContainerStyle={{paddingLeft: 5, paddingRight: 20}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={facilities}
              keyExtractor={(item, index) => item.id}
              renderItem={({item, index}) => (
                <Tag
                  style={{marginLeft: 15, width: 80}}
                  outline={!item.checked}
                  primary={item.checked}
                  onPress={() => onSelectFacilities(item)}>
                  {item.name}
                </Tag>
              )}
            />
          </View>
          <View style={{marginTop: 20, marginHorizontal: 20}}>
            <Text headline semibold>
              {t('duration').toUpperCase()}
            </Text>
            <View style={styles.contentRange}>
              <Text caption1 grayColor>
                0h
              </Text>
              <Text caption1 grayColor>
                18h
              </Text>
            </View>
            <RangeSlider
              style={{
                width: '100%',
                height: 40,
              }}
              thumbRadius={12}
              lineWidth={5}
              gravity={'center'}
              labelStyle="none"
              min={0}
              max={18}
              step={1}
              selectionColor={colors.primary}
              blankColor={BaseColor.dividerColor}
              onValueChanged={(low, high, fromUser) => {
                setDurationBegin(low);
                setDurationEnd(high);
              }}
              onTouchStart={() => {
                setScrollEnabled(false);
              }}
              onTouchEnd={() => {
                setScrollEnabled(true);
              }}
            />
            <View style={styles.contentResultRange}>
              <Text caption1>{t('avg_time')}</Text>
              <Text caption1>
                {durationBegin}h - {durationEnd}h
              </Text>
            </View>
          </View>
          <View style={styles.roundLine}>
            <Text headline semibold>
              {t('airplane').toUpperCase()}
            </Text>
            <View style={styles.rowCenter}>
              <Text body1 light style={{marginRight: 3}}>
                +2
              </Text>
              <Icon
                name="angle-right"
                size={12}
                color={colors.primary}
                enableRTL={true}
              />
            </View>
          </View>
          <Text headline semibold style={{marginLeft: 20, marginTop: 20}}>
            {t('transit').toUpperCase()}
          </Text>
          <View style={{marginTop: 5}}>
            <FlatList
              contentContainerStyle={{paddingLeft: 5, paddingRight: 20}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={transit}
              keyExtractor={(item, index) => item.id}
              renderItem={({item, index}) => (
                <Tag
                  style={{marginLeft: 15, width: 80}}
                  outline={!item.checked}
                  primary={item.checked}
                  onPress={() => onSelectTransit(item)}>
                  {item.name}
                </Tag>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
