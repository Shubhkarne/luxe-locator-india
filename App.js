import React, { useState, useMemo } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Linking,
  StyleSheet,
  StatusBar,
} from "react-native";

const STORES = [
  {
    id: "1",
    brand: "Louis Vuitton",
    category: "Fashion & Leather",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    mall: "Jio World Plaza",
    address: "G-15, Jio World Plaza, Bandra Kurla Complex, Mumbai 400051",
    lat: 19.0664,
    lng: 72.8691,
  },
  {
    id: "2",
    brand: "Hermes",
    category: "Fashion & Leather",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    mall: "Horniman Circle",
    address: "15A Horniman Circle, Fort, Mumbai 400001",
    lat: 18.9322,
    lng: 72.8347,
  },
  {
    id: "3",
    brand: "Cartier",
    category: "Watches & Jewelry",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    mall: "Jio World Plaza",
    address: "Ground Floor, Jio World Plaza, BKC, Mumbai 400051",
    lat: 19.0664,
    lng: 72.8691,
  },
  {
    id: "4",
    brand: "Sabyasachi",
    category: "Indian Couture",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    mall: "Kala Ghoda Flagship",
    address: "ICICI Bank Building, Veer Nariman Rd, Fort, Mumbai 400001",
    lat: 18.9338,
    lng: 72.8328,
  },
  {
    id: "5",
    brand: "Rolex",
    category: "Watches & Jewelry",
    country: "India",
    state: "Maharashtra",
    city: "Pune",
    mall: "The Pavilion (Ethos)",
    address: "Senapati Bapat Rd, Shivajinagar, Pune 411016",
    lat: 18.5342,
    lng: 73.8299,
  },
  {
    id: "6",
    brand: "Christian Dior",
    category: "Fashion & Leather",
    country: "India",
    state: "Delhi",
    city: "New Delhi",
    mall: "DLF Emporio",
    address: "Ground Floor, DLF Emporio, Vasant Kunj, New Delhi 110070",
    lat: 28.5436,
    lng: 77.1568,
  },
  {
    id: "7",
    brand: "Bulgari",
    category: "Watches & Jewelry",
    country: "India",
    state: "Delhi",
    city: "New Delhi",
    mall: "DLF Emporio",
    address: "Shop 106, DLF Emporio, Vasant Kunj, New Delhi 110070",
    lat: 28.5436,
    lng: 77.1568,
  },
  {
    id: "8",
    brand: "Rolex",
    category: "Watches & Jewelry",
    country: "India",
    state: "Delhi",
    city: "New Delhi",
    mall: "The Chanakya",
    address: "Yashwant Place Commercial Complex, Chanakyapuri, New Delhi 110021",
    lat: 28.5847,
    lng: 77.1852,
  },
  {
    id: "9",
    brand: "Gucci",
    category: "Fashion & Leather",
    country: "India",
    state: "Karnataka",
    city: "Bengaluru",
    mall: "UB City - The Collection",
    address: "24 Vittal Mallya Rd, Ashok Nagar, Bengaluru 560001",
    lat: 12.9716,
    lng: 77.5961,
  },
  {
    id: "10",
    brand: "Louis Vuitton",
    category: "Fashion & Leather",
    country: "India",
    state: "Karnataka",
    city: "Bengaluru",
    mall: "UB City - The Collection",
    address: "24 Vittal Mallya Rd, Ashok Nagar, Bengaluru 560001",
    lat: 12.9716,
    lng: 77.5961,
  },
  {
    id: "11",
    brand: "Manish Malhotra",
    category: "Indian Couture",
    country: "India",
    state: "Telangana",
    city: "Hyderabad",
    mall: "Banjara Hills Flagship",
    address: "Road No. 12, Banjara Hills, Hyderabad 500034",
    lat: 17.4126,
    lng: 78.4392,
  },
  {
    id: "12",
    brand: "Gucci",
    category: "Fashion & Leather",
    country: "India",
    state: "West Bengal",
    city: "Kolkata",
    mall: "Quest Mall",
    address: "33 Syed Amir Ali Ave, Beck Bagan, Kolkata 700017",
    lat: 22.5396,
    lng: 88.3656,
  },
  {
    id: "13",
    brand: "Burberry",
    category: "Fashion & Leather",
    country: "India",
    state: "Tamil Nadu",
    city: "Chennai",
    mall: "Palladium Chennai",
    address: "142 Velachery Main Rd, Velachery, Chennai 600042",
    lat: 12.9916,
    lng: 80.2197,
  },
  {
    id: "14",
    brand: "Omega",
    category: "Watches & Jewelry",
    country: "India",
    state: "Gujarat",
    city: "Ahmedabad",
    mall: "Palladium Ahmedabad",
    address: "SG Highway, Thaltej, Ahmedabad 380054",
    lat: 23.0471,
    lng: 72.5112,
  },
  {
    id: "15",
    brand: "VegNonVeg",
    category: "Footwear & Shoes",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    mall: "Bandra West Flagship",
    address: "B 501, 506, Hill Rd, Ranwar, Bandra West, Mumbai 400050",
    lat: 19.0607,
    lng: 72.8362,
  },
  {
    id: "16",
    brand: "VegNonVeg",
    category: "Footwear & Shoes",
    country: "India",
    state: "Delhi",
    city: "New Delhi",
    mall: "Safdarjung Enclave",
    address: "Commercial Complex, B 6/19, Deer Park, Safdarjung Enclave, New Delhi 110029",
    lat: 28.5582,
    lng: 77.1945,
  },
  {
    id: "17",
    brand: "Gully Labs",
    category: "Footwear & Shoes",
    country: "India",
    state: "Delhi",
    city: "New Delhi",
    mall: "Panchsheel Park",
    address: "Local Shopping Center, 14, Panchsheel Park, New Delhi 110017",
    lat: 28.5458,
    lng: 77.2165,
  },
  {
    id: "18",
    brand: "VegNonVeg",
    category: "Footwear & Shoes",
    country: "India",
    state: "Karnataka",
    city: "Bengaluru",
    mall: "Indiranagar Flagship",
    address: "1154, 12th Main Rd, HAL 2nd Stage, Indiranagar, Bengaluru 560038",
    lat: 12.9719,
    lng: 77.6412,
  },
  {
    id: "19",
    brand: "VegNonVeg",
    category: "Footwear & Shoes",
    country: "India",
    state: "Telangana",
    city: "Hyderabad",
    mall: "Jubilee Hills Flagship",
    address: "8-2-293/82/A/382, Road No. 22, Jubilee Hills, Hyderabad 500033",
    lat: 17.4326,
    lng: 78.4071,
  },
  {
    id: "20",
    brand: "VegNonVeg",
    category: "Footwear & Shoes",
    country: "India",
    state: "Haryana",
    city: "Gurugram",
    mall: "Grand View High Street",
    address: "Shop 8C, Ground Floor, Grand View High Street, Sector 59, Gurugram 122001",
    lat: 28.4148,
    lng: 77.1456,
  },
  {
    id: "21",
    brand: "Christian Louboutin",
    category: "Footwear & Shoes",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    mall: "Horniman Circle",
    address: "Sir HC Dinshaw Building, Horniman Circle, Fort, Mumbai 400001",
    lat: 18.9324,
    lng: 72.8349,
  },
  {
    id: "22",
    brand: "Christian Louboutin",
    category: "Footwear & Shoes",
    country: "India",
    state: "Delhi",
    city: "New Delhi",
    mall: "DLF Emporio",
    address: "4, Nelson Mandela Marg, Vasant Kunj, New Delhi 110070",
    lat: 28.5436,
    lng: 77.1568,
  },
  {
    id: "23",
    brand: "Jimmy Choo",
    category: "Footwear & Shoes",
    country: "India",
    state: "Delhi",
    city: "New Delhi",
    mall: "DLF Emporio",
    address: "Shop 144, DLF Emporio Mall, Nelson Mandela Marg, Vasant Kunj, New Delhi 110070",
    lat: 28.5436,
    lng: 77.1568,
  },
  {
    id: "24",
    brand: "Santoni",
    category: "Footwear & Shoes",
    country: "India",
    state: "Delhi",
    city: "New Delhi",
    mall: "DLF Emporio",
    address: "222, First Floor, DLF Emporio Mall, Vasant Kunj, New Delhi 110070",
    lat: 28.5436,
    lng: 77.1568,
  },
];

const CATEGORIES = [
  "All",
  "Fashion & Leather",
  "Watches & Jewelry",
  "Indian Couture",
  "Footwear & Shoes",
];

function FilterChips({ label, options, selected, onSelect }) {
  return (
    <View style={styles.filterBlock}>
      <Text style={styles.filterLabel}>{label}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipRow}
      >
        {options.map((item) => {
          const active = item === selected;
          return (
            <TouchableOpacity
              key={item}
              style={[styles.chip, active && styles.chipActive]}
              onPress={() => onSelect(item)}
            >
              <Text style={[styles.chipText, active && styles.chipTextActive]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedState, setSelectedState] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const countries = useMemo(
    () => ["All", ...Array.from(new Set(STORES.map((s) => s.country)))],
    []
  );

  const states = useMemo(() => {
    const base =
      selectedCountry === "All"
        ? STORES
        : STORES.filter((s) => s.country === selectedCountry);
    return ["All", ...Array.from(new Set(base.map((s) => s.state)))];
  }, [selectedCountry]);

  const cities = useMemo(() => {
    const base = STORES.filter((s) => {
      const okCountry =
        selectedCountry === "All" || s.country === selectedCountry;
      const okState = selectedState === "All" || s.state === selectedState;
      return okCountry && okState;
    });
    return ["All", ...Array.from(new Set(base.map((s) => s.city)))];
  }, [selectedCountry, selectedState]);

  const brands = useMemo(
    () => ["All", ...Array.from(new Set(STORES.map((s) => s.brand)))],
    []
  );

  const filteredStores = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return STORES.filter((store) => {
      const matchCountry =
        selectedCountry === "All" || store.country === selectedCountry;
      const matchState =
        selectedState === "All" || store.state === selectedState;
      const matchCity = selectedCity === "All" || store.city === selectedCity;
      const matchBrand =
        selectedBrand === "All" || store.brand === selectedBrand;
      const matchCategory =
        selectedCategory === "All" || store.category === selectedCategory;
      const matchQuery =
        !q ||
        store.brand.toLowerCase().includes(q) ||
        store.city.toLowerCase().includes(q) ||
        store.state.toLowerCase().includes(q) ||
        store.country.toLowerCase().includes(q) ||
        store.mall.toLowerCase().includes(q) ||
        store.category.toLowerCase().includes(q) ||
        store.address.toLowerCase().includes(q);

      return (
        matchCountry &&
        matchState &&
        matchCity &&
        matchBrand &&
        matchCategory &&
        matchQuery
      );
    });
  }, [
    searchQuery,
    selectedCountry,
    selectedState,
    selectedCity,
    selectedBrand,
    selectedCategory,
  ]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCountry("All");
    setSelectedState("All");
    setSelectedCity("All");
    setSelectedBrand("All");
    setSelectedCategory("All");
  };

  const openDirections = (store) => {
    const queryText =
      store.lat && store.lng
        ? `${store.lat},${store.lng}(${store.brand} - ${store.mall})`
        : `${store.brand} ${store.mall} ${store.city} ${store.country}`;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      queryText
    )}`;
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0e0d0b" />

      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>LUXE LOCATOR INDIA</Text>
            <Text style={styles.subtitle}>
              Luxury Boutiques, Footwear & Map Directions
            </Text>
          </View>
          <TouchableOpacity style={styles.resetBtn} onPress={resetFilters}>
            <Text style={styles.resetBtnText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search brand, mall, city, state, or category..."
        placeholderTextColor="#8c8578"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.filtersContainer}>
        <FilterChips
          label="Country"
          options={countries}
          selected={selectedCountry}
          onSelect={(val) => {
            setSelectedCountry(val);
            setSelectedState("All");
            setSelectedCity("All");
          }}
        />
        <FilterChips
          label="State"
          options={states}
          selected={selectedState}
          onSelect={(val) => {
            setSelectedState(val);
            setSelectedCity("All");
          }}
        />
        <FilterChips
          label="City"
          options={cities}
          selected={selectedCity}
          onSelect={setSelectedCity}
        />
        <FilterChips
          label="Brand"
          options={brands}
          selected={selectedBrand}
          onSelect={setSelectedBrand}
        />
        <FilterChips
          label="Category"
          options={CATEGORIES}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </View>

      <View style={styles.countBar}>
        <Text style={styles.countText}>
          {filteredStores.length}{" "}
          {filteredStores.length === 1 ? "boutique" : "boutiques"} found
        </Text>
      </View>

      <FlatList
        data={filteredStores}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyText}>
              No matching luxury boutiques found. Try resetting filters.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.brand}>{item.brand}</Text>
              <Text style={styles.categoryTag}>{item.category}</Text>
            </View>
            <Text style={styles.locationLine}>
              {item.city}, {item.state}, {item.country}
            </Text>
            <Text style={styles.mallText}>{item.mall}</Text>
            <Text style={styles.addressText}>{item.address}</Text>
            <TouchableOpacity
              style={styles.directionsBtn}
              onPress={() => openDirections(item)}
            >
              <Text style={styles.directionsBtnText}>Get Directions</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e0d0b",
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#2a261f",
  },
  headerTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  title: {
    color: "#d4af37",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 1.4,
  },
  subtitle: {
    color: "#b5ad9e",
    fontSize: 12,
    marginTop: 3,
  },
  resetBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#d4af37",
    backgroundColor: "#1b1915",
  },
  resetBtnText: {
    color: "#d4af37",
    fontSize: 12,
    fontWeight: "600",
  },
  searchInput: {
    backgroundColor: "#1b1915",
    color: "#f5f2eb",
    marginHorizontal: 14,
    marginTop: 12,
    marginBottom: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#332e25",
    fontSize: 14,
  },
  filtersContainer: {
    paddingBottom: 4,
  },
  filterBlock: {
    marginBottom: 6,
  },
  filterLabel: {
    color: "#9c9486",
    fontSize: 11,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginLeft: 14,
    marginBottom: 4,
  },
  chipRow: {
    paddingHorizontal: 14,
    gap: 8,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: "#1b1915",
    borderWidth: 1,
    borderColor: "#332e25",
  },
  chipActive: {
    backgroundColor: "#d4af37",
    borderColor: "#d4af37",
  },
  chipText: {
    color: "#dcd6ca",
    fontSize: 12,
    fontWeight: "600",
  },
  chipTextActive: {
    color: "#0e0d0b",
  },
  countBar: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#221f19",
    backgroundColor: "#14120f",
  },
  countText: {
    color: "#b5ad9e",
    fontSize: 12,
    fontWeight: "500",
  },
  listContent: {
    padding: 14,
    paddingBottom: 32,
  },
  emptyBox: {
    padding: 24,
    alignItems: "center",
    backgroundColor: "#181612",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2c271e",
  },
  emptyText: {
    color: "#b5ad9e",
    fontSize: 13,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#181612",
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#2c271e",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  brand: {
    color: "#f5f2eb",
    fontSize: 17,
    fontWeight: "700",
    flexShrink: 1,
  },
  categoryTag: {
    color: "#d4af37",
    fontSize: 11,
    fontWeight: "600",
    backgroundColor: "#262118",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  locationLine: {
    color: "#d4af37",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 4,
  },
  mallText: {
    color: "#e6e0d4",
    fontSize: 13,
    fontWeight: "600",
    marginTop: 6,
  },
  addressText: {
    color: "#b5ad9e",
    fontSize: 12,
    marginTop: 3,
    lineHeight: 17,
  },
  directionsBtn: {
    marginTop: 12,
    backgroundColor: "#d4af37",
    paddingVertical: 10,
    borderRadius: 7,
    alignItems: "center",
  },
  directionsBtnText: {
    color: "#0e0d0b",
    fontWeight: "700",
    fontSize: 13,
  },
});
