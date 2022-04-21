import React, { useState } from "react";
import { View, Text, Image, ScrollView, StatusBar } from "react-native";

import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../../constants";
import { Header, IconButton } from "../../components";
import { WebView } from "react-native-webview";
import Loading from "../Loading/Loading";

const PrivacyPolice = ({ navigation }) => {
    const [visible, setVisible] = useState(true);

    setTimeout(() => {
        setVisible(false);
    }, 1000);

    function renderHeader() {
        return (
            <Header
                title="Kebijakan Privasi"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 20,
                    marginBottom: 10,
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: "center",
                            alignItems: "center",
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2,
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2,
                        }}
                        onPress={() => navigation.goBack()}
                    ></IconButton>
                }
                rightComponent={
                    <IconButton
                        icon={icons.callcenter}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: "center",
                            alignItems: "center",
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2,
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2,
                        }}
                        onPress={() => navigation.goBack()}
                    ></IconButton>
                }
            ></Header>
        );
    }

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                }}
            >
                <ScrollView
                    style={{
                        flex: 1,
                    }}
                >
                    {/* Header */}
                    {renderHeader()}

                    {/* Body */}
                    {!visible ? (
                        <View>
                            <View
                                style={{
                                    backgroundColor: COLORS.primary,
                                    flexDirection: "row",
                                    padding: SIZES.padding,
                                }}
                            >
                                <Image
                                    source={dummyData?.appProfile?.profile_image}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        marginRight: SIZES.radius,
                                    }}
                                ></Image>
                                <View
                                    style={{
                                        justifyContent: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            ...FONTS.h3,
                                            color: COLORS.white,
                                        }}
                                    >
                                        BAPENDA Kota Padang
                                    </Text>
                                    <Text
                                        style={{
                                            ...FONTS.h4,
                                            color: COLORS.white,
                                        }}
                                    >
                                        Privacy Police
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    padding: SIZES.padding,
                                }}
                            >
                                <Text
                                    style={{
                                        ...FONTS.body4,
                                    }}
                                >
                                    Kebijakan Privasi berikut ini menjelaskan bagaimana kami, Badan Pendapatan Daerah Kota Padang mengumpulkan, menyimpan,
                                    menggunakan, mengolah, menguasai, mentransfer, mengungkapkan dan melindungi Informasi Pribadi anda. Kebijakan Privasi ini
                                    berlaku bagi seluruh pengguna aplikasi-aplikasi, situs web (www.bapenda.padang.go.id), layanan, atau produk kami, kecuali
                                    diatur pada kebijakan privasi yang terpisah.
                                </Text>
                                <Text
                                    style={{
                                        ...FONTS.body4,
                                        marginTop: 10,
                                    }}
                                >
                                    Mohon baca Kebijakan Privasi ini dengan seksama untuk memastikan bahwa anda memahami bagaimana proses pengolahan data kami.
                                    Kecuali didefinisikan lain, semua istilah dengan huruf kapital yang digunakan dalam Kebijakan Privasi ini memiliki arti yang
                                    sama dengan yang tercantum dalam Ketentuan Pengunaan.
                                </Text>
                                <Text
                                    style={{
                                        ...FONTS.body4,
                                        marginTop: 10,
                                    }}
                                >
                                    Kebijakan Privasi ini mencakup hal-hal sebagai berikut :
                                </Text>
                                <Text
                                    style={{
                                        ...FONTS.body4,
                                        marginTop: 10,
                                    }}
                                >
                                    1. Informasi Pribadi yang kami kumpulkan
                                </Text>
                                <Text
                                    style={{
                                        ...FONTS.body4,
                                        marginTop: 10,
                                    }}
                                >
                                    2. Penggunaan Informasi Pribadi yang kami kumpulkan
                                </Text>
                                <Text
                                    style={{
                                        ...FONTS.body4,
                                        marginTop: 10,
                                    }}
                                >
                                    3. Pemberian Informasi Pribadi yang kami kumpulkan
                                </Text>
                                <Text
                                    style={{
                                        ...FONTS.body4,
                                        marginTop: 10,
                                    }}
                                >
                                    4. Penyimpanan Informasi Pribadi
                                </Text>
                                <Text
                                    style={{
                                        ...FONTS.body4,
                                        marginTop: 10,
                                    }}
                                >
                                    5. Tempat kami menyimpan Informasi Pribadi anda
                                </Text>
                                <Text
                                    style={{
                                        ...FONTS.body4,
                                        marginTop: 10,
                                    }}
                                >
                                    6. Keamanan Informasi Pribadi anda
                                </Text>
                                <Text
                                    style={{
                                        ...FONTS.body4,
                                        marginTop: 10,
                                    }}
                                >
                                    7. Perubahan atas Kebijakan Privasi ini
                                </Text>
                                <Text
                                    style={{
                                        ...FONTS.body4,
                                        marginTop: 10,
                                    }}
                                >
                                    8. Cara untuk menghubungi kami
                                </Text>
                                <Text
                                    style={{
                                        ...FONTS.h4,
                                        marginTop: 30,
                                    }}
                                >
                                    1. INFORMASI PRIBADI YANG KAMI KUMPULKAN
                                </Text>
                                <Text
                                    style={{
                                        ...FONTS.body4,
                                        marginTop: 10,
                                    }}
                                >
                                    Kami mengumpulkan informasi yang mengidentifikasikan atau dapat digunakan untuk mengidentifikasi, menghubungi, atau
                                    menemukan orang atau perangkat yang terkait dengan informasi tersebut ("Informasi Pribadi"). Informasi Pribadi termasuk,
                                    tetapi tidak terbatas pada, nama, alamat, tanggal lahir, pekerjaan, nomor telepon, alamat e-mail, rekening bank dan detail
                                    kartu kredit, jenis kelamin, identifikasi (termasuk KTP, SIM, atau Paspor) atau tanda pengenal lainnya yang dikeluarkan oleh
                                    pemerintah, foto, kewarganegaraan, nomor telepon pengguna dan non-pengguna Aplikasi kami yang terdapat dalam daftar kontak
                                    telefon selular anda, data kesehatan, informasi keuangan terkait, serta informasi biometrik (termasuk namun tidak terbatas
                                    pengenalan wajah). Selain itu, untuk informasi lainnya, seperti profil pribadi, dan/atau nomor pengenal unik, yang dikaitkan
                                    atau digabungkan dengan Informasi Pribadi, maka informasi tersebut juga dianggap sebagai Informasi Pribadi. Informasi
                                    Pribadi yang kami kumpulkan dapat diberikan oleh anda secara langsung atau oleh pihak ketiga (misalnya: ketika anda
                                    mendaftar atau menggunakan Aplikasi, ketika anda menghubungi layanan pelanggan kami, atau sebaliknya ketika anda memberikan
                                    Informasi Pribadi kepada kami). Kami dapat mengumpulkan informasi dalam berbagai macam bentuk dan tujuan (termasuk tujuan
                                    yang diizinkan berdasarkan peraturan perundang-undangan yang berlaku).
                                </Text>
                            </View>
                        </View>
                    ) : null}

                    {/* Footer */}
                </ScrollView>
                {visible ? <Loading /> : null}
            </View>
        </>
    );
};

export default PrivacyPolice;
