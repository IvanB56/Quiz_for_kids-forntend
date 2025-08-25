import {Rules} from "@widgets";
import {SectionWhite} from "@components";
import { child } from '@assets/mocks/Rules/rules';

const PageRules = () => {
	return (
		<>
			<SectionWhite overflow='overflow-visible'>
				<Rules texts={child}/>
			</SectionWhite>
		</>
	);
}

export default PageRules;
