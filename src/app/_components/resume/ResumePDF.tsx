import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import resumeObj from "./workExperience";
import formatMonthYearISO from '../../_utils/DateFormat';
import { mySkillsData } from '../../_utils/skillData';

// Define a modern, professional color palette
const colors = {
    ink: '#0f172a',        // Deep navy
    slate: '#334155',      // Slate text
    muted: '#64748b',      // Muted supporting text
    accent: '#0f766e',     // Teal accent
    paper: '#f8fafc',      // Soft paper background
    border: '#e2e8f0'      // Subtle borders
};

// Create styles
const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 10.5,
        paddingTop: 28,
        paddingLeft: 42,
        paddingRight: 44,
        paddingBottom: 30,
        lineHeight: 1.5,
        color: colors.slate,
        backgroundColor: '#fcfcfd',
    },
    header: {
        marginBottom: 22,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems: 'flex-start',
    },
    name: {
        fontSize: 25,
        fontFamily: 'Helvetica-Bold',
        color: colors.ink,
        letterSpacing: 0.2,
        marginBottom: 8,
    },
    title: {
        fontSize: 10.5,
        color: colors.muted,
        fontFamily: 'Helvetica',
        letterSpacing: 0.6,
        textTransform: 'uppercase',
    },
    section: {
        marginBottom: 16,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 8,
    },
    sectionTitle: {
        fontSize: 11.5,
        fontFamily: 'Helvetica-Bold',
        color: colors.accent,
        letterSpacing: 0.8,
        textTransform: 'uppercase',
    },
    sectionRule: {
        flexGrow: 1,
        height: 1,
        marginLeft: 10,
        marginBottom: 2,
        backgroundColor: colors.border,
    },
    entry: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    timelineContainer: {
        width: '10%',
        position: 'relative',
        paddingLeft: 2,
    },
    timelineDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: colors.accent,
        position: 'absolute',
        top: 6,
        left: 2,
    },
    timelineLine: {
        position: 'absolute',
        left: 6,
        top: 8,
        bottom: -8, // Extend line below the last dot
        width: 1,
        backgroundColor: colors.border,
    },
    contentContainer: {
        width: '90%',
        padding: 12,
        backgroundColor: colors.paper,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.border,
        borderLeftWidth: 3,
        borderLeftColor: colors.accent,
    },
    jobTitle: {
        fontSize: 11.5,
        fontFamily: 'Helvetica-Bold',
        color: colors.ink,
    },
    company: {
        fontSize: 11,
        fontFamily: 'Helvetica-Bold',
        color: colors.accent,
        textDecoration: 'none',
    },
    dateAndLocation: {
        fontSize: 9,
        fontFamily: 'Helvetica-Oblique',
        color: colors.muted,
        marginTop: 2,
        marginBottom: 6,
    },
    bullet: {
        marginLeft: 10,
        fontSize: 9.5,
        color: colors.slate,
        lineHeight: 1.4,
    },
    thesisTitle: {
        marginTop: 4,
        marginBottom: 2,
        fontSize: 9.5,
        color: colors.slate,
        fontFamily: 'Helvetica-Oblique',
    },
    skillsText: {
        fontSize: 8.5,
        fontFamily: 'Helvetica-Bold',
        marginTop: 6,
        color: colors.accent,
    }
});

// Create Document Component
const ResumePDF = () => {
    const sortedWorkExp = [...resumeObj.work_exp].sort((a, b) => b.end_date.getTime() - a.end_date.getTime());

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.name}>Michael Kick</Text>
                    <Text style={styles.title}>Software Engineer</Text>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Work Experience</Text>
                        <View style={styles.sectionRule} />
                    </View>
                    <View>
                        <View style={styles.timelineLine} />
                        {sortedWorkExp.map((exp, id) => {
                            const skillNames = exp.skills.map(skillKey => mySkillsData.find(s => s.key === skillKey)?.name).filter(Boolean).join(', ');
                            return (
                                <View key={id} style={styles.entry} wrap={false}>
                                    <View style={styles.timelineContainer}>
                                        <View style={styles.timelineDot} />
                                    </View>
                                    <View style={styles.contentContainer}>
                                        <Text style={styles.jobTitle}>{exp.activity}</Text>
                                        <Link style={styles.company} src={exp.companyLink}>
                                            @{exp.companyName}
                                        </Link>
                                        <Text style={styles.dateAndLocation}>
                                            {formatMonthYearISO(exp.start_date)} - {formatMonthYearISO(exp.end_date)} | {exp.city}, {exp.country}
                                        </Text>
                                        {exp.description.map((point, pointId) => (
                                             <Text key={pointId} style={styles.bullet}>• {point}</Text>
                                        ))}
                                        <Text style={styles.skillsText}>Skills: {skillNames}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Education</Text>
                        <View style={styles.sectionRule} />
                    </View>
                     <View>
                        <View style={styles.timelineLine} />
                        {resumeObj.education.map((edu, id) => {
                            const skillNames = edu.skills.map(skillKey => mySkillsData.find(s => s.key === skillKey)?.name).filter(Boolean).join(', ');
                            return (
                                <View key={id} style={styles.entry} wrap={false}>
                                    <View style={styles.timelineContainer}>
                                        <View style={styles.timelineDot} />
                                    </View>
                                    <View style={styles.contentContainer}>
                                        <Text style={styles.jobTitle}>{edu.academicTitle}</Text>
                                         <Link style={styles.company} src={edu.uniLink}>
                                            @{edu.university}
                                        </Link>
                                        <Text style={styles.dateAndLocation}>
                                            {formatMonthYearISO(edu.start_date)} - {formatMonthYearISO(edu.end_date)} | {edu.city}, {edu.country}
                                        </Text>
                                        <Text style={styles.thesisTitle}>{edu.thesisTitle}</Text>
                                         {edu.description.map((point, pointId) => (
                                             <Text key={pointId} style={styles.bullet}>• {point}</Text>
                                        ))}
                                        <Text style={styles.skillsText}>Skills: {skillNames}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </Page>
        </Document>
    );
}
export default ResumePDF;
