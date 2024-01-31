//package com.backend.workitwise.filter;
//
//import com.backend.workitwise.repository.DiaryRepository;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import lombok.RequiredArgsConstructor;
//import org.jetbrains.annotations.NotNull;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import java.io.IOException;
//import java.security.Principal;
//
//@Component
//@RequiredArgsConstructor
//public class DiaryFilter extends OncePerRequestFilter {
//
//    private final DiaryRepository diaryRepository;
//
//    @Override
//    protected void doFilterInternal(@NotNull HttpServletRequest request, @NotNull HttpServletResponse response, @NotNull FilterChain filterChain)
//            throws ServletException, IOException {
//        System.out.println("-------------- Inside Diary Filter -------------");
//        Principal principal = request.getUserPrincipal();
//        System.out.println(principal);
////        diaryRepository.findByUserUserIdAndDiaryId(principal.getUserId(), Integer.parseInt(request.getParameter("diaryId"))).orElseThrow(
////                ()-> new UnauthorizedException("You are not authorized to perform this action.")
////        );
//
//        filterChain.doFilter(request, response);
//
//    }
//
//    @Override
//    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
//        String path = request.getServletPath();
//        System.out.println(" ---------------------------- ");
//        System.out.println(path);
//        System.out.println(" ---------------------------- ");
//        return !path.startsWith("/diary/v1/delete") && !path.startsWith("/diary/v1/edit");
//    }
//}
