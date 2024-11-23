import { EmbeddedMapInterface } from "@nations-hub/components/UI/EmbeddedMap/interface";
import { FC } from "react";

const EmbeddedMap: FC<EmbeddedMapInterface> = (props) => {

    return <iframe
                title={props.title}
                src={`https://www.google.com/maps?q=${encodeURIComponent(props.countryName)}&output=embed&zoom=${props.zoom}`}
                style={{ border: 0, width: '100%', height: '500px', borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
            />
}

export default EmbeddedMap;