import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';

Feather.loadFont();
AntDesign.loadFont();
FontAwesome.loadFont();
MaterialCommunityIcons.loadFont();

const HomeScreen = () => {
  const renderCategoriesItem = ({item}) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}>
          <FontAwesome
            name="chevron-right"
            size={8}
            style={styles.categorySelectIcon}
            color={item.selected ? colors.black : colors.white}
          />
        </View>
      </View>
    );
  };

  const renderPopularItem = ({item}) => {
    return (
      <View style={styles.popularItemWrapper}>
        <View style={styles.popularLeftItems}>
          <View style={styles.popularItemHeading}>
            <MaterialCommunityIcons
              name="crown"
              size={14}
              color={colors.primary}
            />
            <Text style={styles.popularItemHeadingTitle}>Top of the week</Text>
          </View>
          <View style={{marginLeft: 20, marginTop: 20}}>
            <Text style={styles.popularItemHeadingTitle}>{item.title}</Text>
            <Text style={styles.popularItemWeight}>Weight {item.weight}</Text>
          </View>
        </View>
        <View style={styles.popularRightItems}>
          <Image source={item.image} style={styles.popularItemsImage} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerwrapper}>
          <Image
            source={require('../assets/images/pizza1.png')}
            style={styles.profileImage}
          />
          <Feather name="menu" size={24} color={colors.textDark} />
        </View>
      </SafeAreaView>
      {/* Titles */}
      <View style={styles.titlesWrapper}>
        <Text style={styles.subTitles}>Food</Text>
        <Text style={styles.titlesTitles}>Delivery</Text>
      </View>
      {/* Search */}
      <View style={styles.searchWrapper}>
        <AntDesign name="search1" size={16} color={colors.textDark} />
        <View style={styles.search}>
          <Text style={styles.searchText}>Search...</Text>
        </View>
      </View>
      {/* Categories */}
      <View style={styles.categoriesWrapper}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <View style={styles.categoriesListWrapper}>
          <FlatList
            data={categoriesData}
            renderItem={renderCategoriesItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
      </View>
      {/* Popular */}
      <View style={styles.popularWrapper}>
        <Text style={styles.popularTitle}>Popular</Text>
        <View style={styles.popularListWrapper}>
          <FlatList data={popularData} renderItem={renderPopularItem} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerwrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  subTitles: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.textDark,
  },
  titlesTitles: {
    marginTop: 5,
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
  },
  searchWrapper: {
    paddingHorizontal: 20,
    marginTop: 36,
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    marginLeft: 2,
    marginBottom: 5,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textLight,
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    paddingHorizontal: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    // backgroundColor: colors.primary,
    marginRight: 20,
    height: 177,
    width: 105,
    borderRadius: 20,
  },
  categoryItemImage: {
    height: 60,
    width: 60,
    marginTop: 24,
    alignSelf: 'center',
  },
  categoryItemTitle: {
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    marginTop: 20,
    height: 26,
    width: 26,
    borderRadius: 26,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  categorySelectIcon: {
    marginTop: 9,
    marginLeft: 1,
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  popularListWrapper: {
    marginTop: 11,
  },
  popularItemWrapper: {
    height: 161,
    borderRadius: 25,
    backgroundColor: colors.background,
    marginBottom: 20,
    flexDirection: 'row',
  },
  popularItemHeading: {
    marginLeft: 20,
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularItemHeadingTitle: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  popularLeftItems: {},
  popularRightItems: {
    flex: 1,
    marginTop: 18,
    marginLeft: 20,
    marginBottom: 18,
    width: 210,
  },
  popularItemsImage: {width: 210, height: 125},
  popularItemWeight: {},
});
