package com.backend.workitwise.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "units")
public class Units {

    @Id
    @GeneratedValue
    private Integer unitId;

    @Column(unique = true, nullable = false)
    private String unit;
}
