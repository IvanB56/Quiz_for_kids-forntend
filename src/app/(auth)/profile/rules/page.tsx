import {Rules} from "@widgets";
import {SectionWhite} from "@components";
import {profile} from '@assets/mocks/Rules/rules';

const PageRules = () => {
	return (
		<>
			<SectionWhite>
				<Rules texts={profile}/>
			</SectionWhite>
		</>
	);
}

export default PageRules;
