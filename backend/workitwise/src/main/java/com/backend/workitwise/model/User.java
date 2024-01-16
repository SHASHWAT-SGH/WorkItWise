package com.backend.workitwise.model;

import com.backend.workitwise.enums.Role;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User implements UserDetails {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Integer userId;
    @Column(nullable = false)
    private String firstName;
    private String lastName;
    @Column(nullable = false)
    private String userEmail;
    @Column(nullable = false)
    private String userPassword;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role userRole;

    @Column(columnDefinition = "boolean default false")
    private Boolean accountExpired=true;
    @Column(columnDefinition = "boolean default false")
    private Boolean accountLocked=true;
    @Column(columnDefinition = "boolean default false")
    private Boolean credentialsExpired=true;
    @Column(columnDefinition = "boolean default true")
    private Boolean enabled=true;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
//        this method returns the authorisation List
        return List.of(new SimpleGrantedAuthority(this.userRole.name()));
    }

    @Override
    public String getPassword() {
        return this.userPassword;
    }

    @Override
    public String getUsername() {
//        this method needs username, not user's name
        return this.userEmail;
    }

    @Override
    public boolean isAccountNonExpired() {
        return !this.accountExpired;
    }

    @Override
    public boolean isAccountNonLocked() {
        return !this.accountLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return !this.credentialsExpired;
    }

    @Override
    public boolean isEnabled() {
        return this.enabled;
    }
}
