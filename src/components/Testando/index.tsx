/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import {
	BriefcaseIcon,
	CalendarIcon,
	CheckIcon,
	ChevronDownIcon,
	CurrencyDollarIcon,
	LinkIcon,
	LocationMarkerIcon,
	PencilIcon,
} from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Testando() {
	return (
		<div className="lg:flex lg:items-center lg:justify-between">
			<div className="flex-1 min-w-0">
				<h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
					Ig News
				</h2>
				<div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
					<div className="mt-2 flex items-center text-sm text-gray-500">
						<BriefcaseIcon
							className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
							aria-hidden="true"
						/>
						Full-time
					</div>
					<div className="mt-2 flex items-center text-sm text-gray-500">
						<LocationMarkerIcon
							className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
							aria-hidden="true"
						/>
						Remote
					</div>
					<div className="mt-2 flex items-center text-sm text-gray-500">
						<CurrencyDollarIcon
							className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
							aria-hidden="true"
						/>
						$120k &ndash; $140k
					</div>
					<div className="mt-2 flex items-center text-sm text-gray-500">
						<CalendarIcon
							className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
							aria-hidden="true"
						/>
						Closing on January 9, 2020
					</div>
				</div>
			</div>
		</div>
	);
}
