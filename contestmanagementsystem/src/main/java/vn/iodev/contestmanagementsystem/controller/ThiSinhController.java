package vn.iodev.contestmanagementsystem.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import vn.iodev.contestmanagementsystem.exception.ResourceNotFoundException;
import vn.iodev.contestmanagementsystem.helper.ExcelHelper;
import vn.iodev.contestmanagementsystem.model.CuocThi;
import vn.iodev.contestmanagementsystem.model.ImportResponse;
import vn.iodev.contestmanagementsystem.model.ThiSinh;
import vn.iodev.contestmanagementsystem.repository.CuocThiRepository;
import vn.iodev.contestmanagementsystem.repository.ThiSinhRepository;
import vn.iodev.contestmanagementsystem.security.VaiTroChecker;
import vn.iodev.contestmanagementsystem.service.ExcelService;

@RestController
@RequestMapping("/api")
public class ThiSinhController {
    @Autowired
    ThiSinhRepository thiSinhRepository;

    @Autowired
    CuocThiRepository cuocThiRepository;

    @Autowired
    ExcelService fileService;
    
    @GetMapping("/thisinhs")
    public List<ThiSinh> getAllThiSinhs(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "15") int size, @RequestParam(name = "tuKhoa", defaultValue = "") String tuKhoa, @RequestParam(required = false) String cuocThiId, @RequestParam(required = false) String doanThiId) {
        Pageable paging = PageRequest.of(page - 1, size);
        Optional<CuocThi> cuocThiData = cuocThiRepository.findById(cuocThiId);
        if (cuocThiData.isPresent()) {
            return thiSinhRepository.findThiSinhByMultipleConditions(tuKhoa, cuocThiData.get(), doanThiId, paging);
        }
        else {
            return thiSinhRepository.findThiSinhByMultipleConditions(tuKhoa, null, doanThiId, paging);
        }
    }

    @GetMapping("/cuocthis/{cuocThiId}/thisinhs")
    public ResponseEntity<List<ThiSinh>> getAllThiSinhsByCuocThiId(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "15") int size, @PathVariable(value = "cuocThiId") String cuocThiId) {
        List<ThiSinh> lstThiSinh = new ArrayList<>();

        if (!cuocThiRepository.existsById(cuocThiId)) {
            return new ResponseEntity<>(lstThiSinh, HttpStatus.OK);
        }

        Pageable paging = PageRequest.of(page - 1, size);

        List<ThiSinh> thiSinhs = thiSinhRepository.findByCuocThiId(cuocThiId, paging);
        lstThiSinh.addAll(thiSinhs);

        return new ResponseEntity<>(lstThiSinh, HttpStatus.OK);
    }

    @PostMapping("/cuocthis/{cuocThiId}/thisinhs")
    public ResponseEntity<ThiSinh> createThiSinhOfCuocThi(@PathVariable(value = "cuocThiId") String cuocThiId, @Valid @RequestBody ThiSinh thiSinh, @RequestHeader("vaiTros") String vaiTros) {
        if (!VaiTroChecker.hasVaiTroQuanTriHeThong(vaiTros)) {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }
        try {
            ThiSinh thiSinhMoi = cuocThiRepository.findById(cuocThiId).map(cuocThi -> {
                thiSinh.setCuocThi(cuocThi);
                return thiSinhRepository.save(thiSinh);
            }).orElseThrow(() -> new ResourceNotFoundException("Not found CuocThi with id = " + cuocThiId));

            return new ResponseEntity<>(thiSinhMoi, HttpStatus.CREATED);
        } catch (ResourceNotFoundException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }   
    }

    @PostMapping("/cuocthis/{cuocThiId}/thisinhs/import")
    public ResponseEntity<ImportResponse> importThiSinh(@PathVariable(value = "cuocThiId") String cuocThiId, @RequestParam("file") MultipartFile multipartFile, @RequestParam("fileType") String fileType) {
        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        long size = multipartFile.getSize();
        String message = "";
        if (!cuocThiRepository.existsById(cuocThiId)) {
            message = "Cound not import ThiSinh: " + multipartFile.getOriginalFilename() + ", CuocThi not found";
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ImportResponse(fileName, size, message));
        }
        Optional<CuocThi> cuocThiData = cuocThiRepository.findById(cuocThiId);

        if (ExcelHelper.hasExcelFormat(multipartFile)) {
            try {
                if (cuocThiData.isPresent()) {
                    fileService.importThiSinh(multipartFile, cuocThiData.get());
                    message = "Import ThiSinh successfully: " + multipartFile.getOriginalFilename();
                    return ResponseEntity.status(HttpStatus.OK).body(new ImportResponse(fileName, size, message));
                }
                else {
                    message = "Cound not import ThiSinh: " + multipartFile.getOriginalFilename() + ", CuocThi not found";
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ImportResponse(fileName, size, message));
                }
            }
            catch (Exception e) {
                e.printStackTrace();
                message = "Cound not import ThiSinh: " + multipartFile.getOriginalFilename();
                return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ImportResponse(fileName, size, message));
            }
        }

        message = "Please import an excel file!";
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ImportResponse(fileName, size, message));
    }

    @GetMapping("/thisinhs/{id}")
    public ResponseEntity<ThiSinh> getThiSinhById(@PathVariable(value = "id") String thiSinhId)
        throws ResourceNotFoundException {
        ThiSinh thiSinh = thiSinhRepository.findById(thiSinhId)
          .orElseThrow(() -> new ResourceNotFoundException("ThiSinh not found for this id :: " + thiSinhId));
        return ResponseEntity.ok().body(thiSinh);
    }

    @PostMapping("/thisinhs")
    public ResponseEntity<ThiSinh> createThiSinh(@RequestBody ThiSinh thiSinh) {
        try {
            ThiSinh _thiSinh = thiSinhRepository.save(new ThiSinh(thiSinh.getHoTen(), thiSinh.getGioiTinh(), thiSinh.getNgaySinh(), thiSinh.getEmail(), thiSinh.getSoDienThoai(), thiSinh.getDoiTuongThi(), thiSinh.getNganhDaoTao(), thiSinh.getDatGiaiThuong(), thiSinh.getCaNhanId(), thiSinh.getCuocThi(), thiSinh.getDoanThiId()));
            return new ResponseEntity<>(_thiSinh, HttpStatus.CREATED);
        }
        catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/thisinhs/{id}")
    public ResponseEntity<ThiSinh> updateThiSinh(@PathVariable("id") String id, @RequestBody ThiSinh thiSinh) {
        Optional<ThiSinh> thiSinhData = thiSinhRepository.findById(id);
        if (thiSinhData.isPresent()) {
            ThiSinh _thiSinh = thiSinhData.get();
            if (thiSinh.getHoTen() != null) {
                _thiSinh.setHoTen(thiSinh.getHoTen());
            }
            if (thiSinh.getGioiTinh() != null) {
                _thiSinh.setGioiTinh(thiSinh.getGioiTinh());
            }
            if (thiSinh.getNgaySinh() != null) {
                _thiSinh.setNgaySinh(thiSinh.getNgaySinh());
            }
            if (thiSinh.getEmail() != null) {
                _thiSinh.setEmail(thiSinh.getEmail());
            }
            if (thiSinh.getSoDienThoai() != null) {
                _thiSinh.setSoDienThoai(thiSinh.getSoDienThoai());
            }
            if (thiSinh.getDoiTuongThi() != null) {
                _thiSinh.setDoiTuongThi(thiSinh.getDoiTuongThi());
            }
            if (thiSinh.getNganhDaoTao() != null) {
                _thiSinh.setNganhDaoTao(thiSinh.getNganhDaoTao());
            }
            if (thiSinh.getDatGiaiThuong() != null) {
                _thiSinh.setDatGiaiThuong(thiSinh.getDatGiaiThuong());
            }
            if (thiSinh.getCaNhanId() != null) {
                _thiSinh.setCaNhanId(thiSinh.getCaNhanId());
            }
            if (thiSinh.getDoanThiId() != null) {
                _thiSinh.setDoanThiId(thiSinh.getDoanThiId());
            }
            _thiSinh.setThoiGianCapNhat(System.currentTimeMillis());
            
            return new ResponseEntity<>(thiSinhRepository.save(_thiSinh), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @DeleteMapping("/thisinhs/{id}")
    public ResponseEntity<HttpStatus> deleteThiSinh(@PathVariable("id") String id) {
        try {
            thiSinhRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/cuocthis/{cuocThiId}/thisinhs")
    public ResponseEntity<List<ThiSinh>> deleteAllThiSinhsOfCuocThi(@PathVariable(value = "cuocThiId") String cuocThiId, @RequestHeader("vaiTros") String vaiTros) {
        if (!VaiTroChecker.hasVaiTroQuanTriHeThong(vaiTros)) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        if (!cuocThiRepository.existsById(cuocThiId)) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        thiSinhRepository.deleteByCuocThiId(cuocThiId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
