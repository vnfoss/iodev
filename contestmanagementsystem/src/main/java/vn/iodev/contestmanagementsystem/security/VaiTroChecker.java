package vn.iodev.contestmanagementsystem.security;

import java.util.Arrays;
import java.util.List;

public class VaiTroChecker {
    public static final String VAITRO_QUANTRIHETHONG = "VAITRO_QUANTRIHETHONG";
    public static final String VAITRO_QUANTRITOCHUC = "VAITRO_QUANTRITOCHUC";
    public static final String VAITRO_NGUOIDUNG = "VAITRO_NGUOIDUNG";

    public static boolean hasVaiTroQuanTriHeThong(String vaiTro) {
        if (vaiTro == null || vaiTro.isEmpty()) return false;
        List<String> lstVaiTro = Arrays.asList(vaiTro.split(","));
        
        return lstVaiTro.contains(VAITRO_QUANTRIHETHONG);
    }
    public static boolean hasVaiTroQuanTriToChuc(String vaiTro) {
        if (vaiTro == null || vaiTro.isEmpty()) return false;
        List<String> lstVaiTro = Arrays.asList(vaiTro.split(","));
        
        return lstVaiTro.contains(VAITRO_QUANTRITOCHUC);
    }

    public static boolean hasVaiTroNguoiDung(String vaiTro) {
        if (vaiTro == null || vaiTro.isEmpty()) return false;
        List<String> lstVaiTro = Arrays.asList(vaiTro.split(","));
        
        return lstVaiTro.contains(VAITRO_NGUOIDUNG);
    }

    public static boolean hasVaiTro(String maVaiTro, String vaiTro) {
        if (vaiTro == null || vaiTro.isEmpty()) return false;
        List<String> lstVaiTro = Arrays.asList(vaiTro.split(","));
        
        return lstVaiTro.contains(maVaiTro);
    }
}
