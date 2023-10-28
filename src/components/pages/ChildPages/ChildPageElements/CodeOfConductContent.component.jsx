import React, { useEffect } from "react";
import { Divider, Image } from "antd";
import "../TitleSegment/TitleSegment.styles.css";
import "../DetailsSegment/DetailsSegment.styles.css";
import "./VenueMap.styles.css";

export const CodeOfConductContent = (props) => {
    const contents = props.contents;

    return (
        <div style={{ backgroundColor: "white" }}>
            <p className="section-content-text">
                The State of the Map Asia organizing team is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, or religion. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks.
            </p>
            <p className="section-content-text">
                Harassment includes verbal comments that reinforce social structures of domination related to gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, religion; sexual images in public spaces; deliberate intimidation; stalking; following; harassing photography or recording; sustained disruption of talks or other events; inappropriate physical contact; and unwelcome sexual attention. Participants asked to stop any harassing behavior are expected to comply immediately.
            </p>
            <p className="section-content-text">
                Exhibitors or similar actors are also subject to the anti-harassment policy. In particular, exhibitors should not use sexualized images, activities, or other material. Booth staff (including volunteers) should not use sexualized clothing, or otherwise create a sexualized environment.
            </p>
            <p className="section-content-text">
                If a participant engages in harassing behavior, the conference organizers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund. If you are being harassed, notice that someone else is being harassed, or have any other concerns that you are unable to satisfactorily resolve amongst the person(s) involved, please contact a member of conference team immediately. Escalation to, and incident reporting by a small subset of conference team leaders will ensure that repeat offenders do not go unnoticed.
            </p>
            <p className="section-content-text">
                The conference team will be happy to help participants contact venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.
            </p>
            <p className="section-content-text">
                We expect participants to follow these rules at all conference venues and conference-related social events.
            </p>
        </div>
    );
};
